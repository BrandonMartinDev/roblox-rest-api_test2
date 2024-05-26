import {
    type Request,
    type Response,
} from 'express';

const ValidateRequestHeaders = (req: Request): boolean | string => {

    const reqHeaders = req.headers;

    if (!reqHeaders) return "There was a problem getting the request's headers.";
    if (!(reqHeaders['content-type'] === 'application/json')) return "Request header did not have its 'content-type' set to 'application/json'";

    return true;

}

const ValidateRequestBody = (req: Request): boolean | string => {

    const reqBody = req.body;

    if (!reqBody) return "There was a problem getting the request's body";

    return true;

}

const ValidateRequestAll = (req: Request): (boolean | string) => {

    const headerValidation = ValidateRequestHeaders(req);
    const bodyValidation = ValidateRequestBody(req);

    const validations = [headerValidation, bodyValidation];

    for (const validation of validations) {
        if (typeof validation === 'string') return validation;
    }

    return true;

}

export { ValidateRequestHeaders, ValidateRequestAll }