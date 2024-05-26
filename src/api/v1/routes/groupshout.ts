// -- == [[ CONFIG ]] == -- \\

// Initialize Express
import express from 'express';
const groupShoutRouter = express.Router();

// Import services methods
import { RespondWithError } from '@v1services/respondService.js'

// Import controller methods
import {
    GetGroupShout,
    ChangeGroupShout
} from '@v1controllers/groupshoutController.js'




// -- == [[ ROUTE ENDPOINT METHODS TO CONTROLLERS ]] == -- \\

// /api/v1/groupshout/
groupShoutRouter.route('/')
    // GET /api/v1/groupshout
    .get(GetGroupShout)
    // POST /api/v1/groupshout
    .post(ChangeGroupShout);

// /api/v1/groupshout/?
groupShoutRouter.route('*')
    // GET /api/v1/groupshout
    .get((req, res) => {
        RespondWithError(res, "INVALID_ENDPOINT", 404);
    })



// -- == [[ EXPORT groupShoutRouter | ENDPOINT: /api/v1/groupshout ]] == -- \\

export default groupShoutRouter;