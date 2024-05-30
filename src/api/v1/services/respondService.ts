import { type Response } from "express";

import {
    type ServerResponseError,
    type ServerResponseSuccess
} from "../types/main-types.js";

export const RespondWithSuccess = (res: Response, successMessage: string, statusCode: number = 200) => {

    const responseSuccess: ServerResponseSuccess = {
        message: successMessage
    }

    res.status(statusCode).json(responseSuccess);

    console.log(`Server sent back success response: ${successMessage}`);

    return responseSuccess;

}

export const RespondWithError = (res: Response, errorMessage: string, errorCode: number = 400) => {

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

    console.log(`Server sent back error response: ${resMessage}`);

    return responseError;

}