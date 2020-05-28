import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import { loginValidation, passwordValidation, emailValidation } from '../helpers/validationHelper';
import db from '../models';
import { secretOrKey } from '../config/keys';
import { transporter } from '../config/nodemailer';

exports.test = async query => {
    try {
        return {
            error: false,
            statusCode: 200,
            msg: 'Testing endpoint works correctly.'
        };
    } catch (errors) {
        return {
            error: true,
            statusCode: 500,
            errors
        };
    }
};

// UTILITY
// Checks if email exists in the database.
exports.checkEmail = async (req, res, next) => {
    const { email } = req.params;

    const emailRegistered = await db.user.findOne({ where: { email } });

    if (emailRegistered) {
        return {
            error: false,
            statusCode: 200,
            isUsed: true
        };
    }
    return {
        error: false,
        statusCode: 200,
        isUsed: false
    };
};

// UTILITY
// Checks if user has a valid token.
exports.validate = async (req, res, next) => {
    return {
        error: false,
        statusCode: 200,
        data: 'Authorized'
    };
};

exports.register = async (req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        password,
        securityAnswer1,
        securityAnswer2,
        securityAnswer3,
        securityQuestion1,
        securityQuestion2,
        securityQuestion3
    } = req.body;

    const emailRegistered = await db.user.findOne({ where: { email } });
    if (emailRegistered)
        return {
            error: true,
            statusCode: 400,
            data: 'Email already in use.'
        };

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    const newUser = {
        firstName,
        lastName,
        email,
        password: hash,
        securityAnswer1,
        securityAnswer2,
        securityAnswer3,
        securityQuestion1,
        securityQuestion2,
        securityQuestion3
    };

    try {
        await db.user.create(newUser);
        return {
            error: false,
            statusCode: 200,
            data: `Welcome aboard, ${firstName}!`
        };
    } catch (error) {
        return {
            error: true,
            statusCode: 400,
            error
        };
    }
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    const { error } = await loginValidation(req.body);
    if (error)
        return {
            error: true,
            statusCode: 400,
            data: error.details[0].message
        };

    const userFound = await db.user.findOne({ where: { email } });
    if (!userFound)
        return {
            error: true,
            statusCode: 404,
            data: 'User not found'
        };

    const match = await bcrypt.compare(password, userFound.password);
    if (!match)
        return {
            error: true,
            statusCode: 400,
            data: 'Email or password is incorrect.'
        };

    const payload = {
        id: userFound.id,
        firstName: userFound.firstName,
        lastName: userFound.lastName,
        email: userFound.email
    };
    const token = await jwt.sign(payload, secretOrKey, { expiresIn: '1hr' });

    return {
        error: false,
        statusCode: 200,
        firstName: userFound.firstName,
        lastName: userFound.lastName,
        email: userFound.email,
        token: `Bearer ${token}`
    };
};

exports.updatePassword = async (req, res, next) => {
    const userId = req.user.id;
    const { password } = req.body;

    const { error } = await passwordValidation(req.body);
    if (error)
        return {
            error: true,
            statusCode: 400,
            data: error.details[0].message
        };

    const salt = await bcrypt.genSalt();

    const hash = await bcrypt.hash(password, salt);

    try {
        const isUpdated = await db.user.update({ password: hash }, { where: { id: userId } });
        if (isUpdated) {
            return {
                error: false,
                statusCode: 200,
                msg: 'Password successfully updated.'
            };
        }
    } catch (error) {
        return {
            error: true,
            statusCode: 400,
            error
        };
    }
};

exports.forgotPassword = async (req, res, next) => {
    const { email } = req.body;

    const { error } = await emailValidation(req.body);

    if (error) {
        return {
            error: true,
            statusCode: 400,
            msg: error.details[0].message
        };
    }

    const emailRegistered = await db.user.findOne({ where: { email } });

    if (!emailRegistered) {
        return {
            error: false,
            statusCode: 200,
            isUsed: false,
            msg: 'Email not found.'
        };
    }

    try {
        const token = crypto.randomBytes(20).toString('hex');

        // 10 minute token created and stored in DB.
        db.user.update(
            {
                resetPasswordToken: token,
                resetPasswordExpires: Date.now() + 360000
            },
            { where: { id: emailRegistered.dataValues.id } }
        );

        const mailOptions = {
            from: 'admin@deweyreads.com',
            to: email,
            subject: 'Link To Reset Password',
            text: `Reset password link: ${process.env.APP_HOST}/reset/${token}`
        };

        transporter.sendMail(mailOptions, (error, response) => {
            if (error) {
                return {
                    error: true,
                    statusCode: 400,
                    error,
                    msg: 'There was an issue sending the reset email'
                };
            }
        });

        return {
            error: false,
            statusCode: 200,
            msg: 'Reset email sent.'
        };
    } catch (error) {
        return {
            error: true,
            statusCode: 400,
            error
        };
    }
};

exports.resetToken = async (req, res, next) => {
    const { resetToken } = req.query;
    const Op = db.Sequelize.Op;

    try {
        // Validates include token
        const validToken = await db.user.findOne({
            where: { resetPasswordToken: resetToken, resetPasswordExpires: { [Op.gt]: Date.now() } }
        });

        if (validToken === null) {
            return {
                error: false,
                statusCode: 200,
                msg: 'Reset token has expired.'
            };
        }

        return {
            error: false,
            statusCode: 200,
            msg: 'Reset link ok.'
        };
    } catch (error) {
        return {
            error: true,
            statusCode: 400,
            error
        };
    }
};
