import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { loginValidation, passwordValidation } from '../helpers/validationHelper';
import db from '../models';
import { secretOrKey } from '../config/keys';

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

exports.validate = async (req, res, next) => {
    return {
        error: false,
        statusCode: 200,
        data: 'Authorized'
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
