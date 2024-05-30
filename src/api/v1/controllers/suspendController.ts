// -- == [[ CONFIG ]] == -- \\

// Import types from express
import {
    type Request,
    type Response
} from "express";

// Import services methods
import {
    RespondWithError,
    RespondWithSuccess
} from '@v1services/respondService.js'

// Import validator methods
import { ValidateSuspendAll } from "@v1validators/suspendValidator.js";
import IPCanRequest from "@v1validators/ratelimitValidator.js";


// Import services methods
import { SuspendUserProvided } from "@v1services/suspendService.js";



// -- == [[ CONTROLLER METHODS ]] == -- \\

// GET /api/v1/suspend
export const GetSuspend = (req: Request, res: Response) => {

    const rateLimitValidation = IPCanRequest(req.ip, "suspend");
    if (typeof rateLimitValidation[0] === 'string') return RespondWithError(res, rateLimitValidation[0], rateLimitValidation[1]);

    return RespondWithSuccess(res, `${req.originalUrl} is OK`, 200);

}

// POST /api/v1/groupshout
export const SuspendUser = (req: Request, res: Response) => {

    const suspendValidation = ValidateSuspendAll(req);
    if (typeof suspendValidation[0] === 'string') return RespondWithError(res, suspendValidation[0], suspendValidation[1]);

    const userIdToSuspend = req.body.userId;

    SuspendUserProvided(userIdToSuspend);

    return RespondWithSuccess(res, `Successfully suspended ${userIdToSuspend}`);

}