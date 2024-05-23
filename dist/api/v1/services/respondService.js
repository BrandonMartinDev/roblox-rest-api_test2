export const RespondWithSuccess = (res, successMessage, statusCode) => {
    const responseSuccess = {
        message: successMessage
    };
    res.status(statusCode).json(responseSuccess);
    return responseSuccess;
};
export const RespondWithError = (res, errorMessage, errorCode) => {
    const responseError = {
        error: errorMessage
    };
    res.status(errorCode).json(responseError);
    return responseError;
};
