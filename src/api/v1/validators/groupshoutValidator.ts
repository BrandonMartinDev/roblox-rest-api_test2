import {
    type Request,
    type Response,
} from 'express';

import { ValidateRequestAll } from './requestValidator.js';

const ValidateGroupShoutBody = (req: Request) => {

    const reqBody = req.body;

    if (!(reqBody.newShout)) return "newShout does not exist on the request's body!"

    return true;

}

const ValidateGroupShoutAll = (req: Request): boolean | string => {

    const requestValidation = ValidateRequestAll(req);
    const bodyValidation = ValidateGroupShoutBody(req);

    const validations = [requestValidation, bodyValidation];

    for (const validation of validations) {
        if (typeof validation === 'string') return validation;
    }

    return true;

}

export { ValidateGroupShoutAll }