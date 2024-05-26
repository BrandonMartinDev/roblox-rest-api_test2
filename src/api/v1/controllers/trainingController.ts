// -- == [[ CONFIG ]] == -- \\

// Import defaults

import { START_TRAINING_MESSAGE } from '@v1config/defaults.js';

// Import types from express
import {
    type Request,
    type Response
} from "express";

// Import services methods
import {
    RespondWithError,
    RespondWithSuccess
} from '@v1services/respondService.js';

// Import validator methods
import { ValidateRequestAll } from "@v1validators/requestValidator.js";
import { SetGroupShout } from "@v1services/groupshoutService.js";



// -- == [[ CONTROLLER METHODS ]] == -- \\

// GET /api/v1/groupshout/
export const GetTraining = (req: Request, res: Response) => {
    return RespondWithSuccess(res, `${req.originalUrl} is OK`, 200);
}

// POST /api/v1/groupshout/
export const StartTraining = (req: Request, res: Response) => {

    const requestValidate = ValidateRequestAll(req);

    if (typeof requestValidate === 'string') return RespondWithError(res, requestValidate, 400);

    SetGroupShout(START_TRAINING_MESSAGE);

    return RespondWithSuccess(res, `Successfully started a training session!`, 200);
}