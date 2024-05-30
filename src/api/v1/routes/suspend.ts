// -- == [[ CONFIG ]] == -- \\

// Initialize Express
import express from 'express';
const suspendRouter = express.Router();

// Import services methods
import { RespondWithError } from '@v1services/respondService.js'

// Import controller methods
import {
    GetSuspend,
    SuspendUser  
} from '@v1controllers/suspendController.js'




// -- == [[ ROUTE ENDPOINT METHODS TO CONTROLLERS ]] == -- \\

// /api/v1/suspend/
suspendRouter.route('/')
    // GET /api/v1/suspend
    .get(GetSuspend)
    // POST /api/v1/suspend
    .post(SuspendUser);

// /api/v1/suspend/?
suspendRouter.route('*')
    // GET /api/v1/suspend
    .get((req, res) => {
        RespondWithError(res, "INVALID_ENDPOINT", 404);
    })



// -- == [[ EXPORT suspendRouter | ENDPOINT: /api/v1/suspend ]] == -- \\

export default suspendRouter;