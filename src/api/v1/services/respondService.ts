import { type Response } from "express";

import {
    type ServerResponseError,
    type ServerResponseSuccess
} from "../types/main-types.js";

export const RespondWithSuccess = (res: Response, successMessage: string, statusCode: number) => {

    const responseSuccess: ServerResponseSuccess = {
        message: successMessage
    }

    res.status(statusCode).json(responseSuccess);

    return responseSuccess;

}

export const RespondWithError = (res: Response, errorMessage: string, errorCode: number) => {

    let resMessage: string;

    switch (errorMessage) {

        case "INVALID_ENDPOINT":
            resMessage = `Endpoint invalid! Please use: api/v1/{ENDPOINT_HERE}`;
            break;

        default:
            resMessage = errorMessage;

    }

    const responseError: ServerResponseError = {
        error: resMessage,
        code: errorCode
    }

    res.status(errorCode).json(responseError);

    return responseError;

}