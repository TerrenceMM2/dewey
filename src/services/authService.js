import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import {
    registerValidation,
    loginValidation,
    passwordValidation
} from '../helpers/validationHelper';
import db from '../models';
import Error from '../lib/Error';
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
    const { firstName, lastName, email, password } = req.body;

    const { error } = await registerValidation(req.body);
    if (error)
        return {
            error: true,
            statusCode: 400,
            data: error.details[0].message
        };

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
        password: hash
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
            error: 400,
            statusCode: 200,
            data: 'Email or password is incorrect.'
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
        email: userFound.email
    };
    const token = await jwt.sign(payload, secretOrKey, { expiresIn: '1hr' });

    return {
        error: false,
        statusCode: 200,
        token: `Bearer ${token}`
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

    console.log(error);
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

        console.log('updated', isUpdated);

        if (isUpdated) {
            return {
                error: false,
                statusCode: 200,
                msg: 'Password successfully updated.'
            };
        }
    } catch (error) {
        console.log('err', error);
        return {
            error: true,
            statusCode: 400,
            error
        };
    }
};
