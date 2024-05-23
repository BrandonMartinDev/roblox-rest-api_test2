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

    const responseError: ServerResponseError = {
        error: errorMessage
    }

    res.status(errorCode).json(responseError);

    return responseError;

}