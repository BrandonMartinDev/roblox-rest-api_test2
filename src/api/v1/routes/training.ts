// -- == [[ CONFIG ]] == -- \\

// Initialize Express
import express from 'express';
const trainingRouter = express.Router();

// Import services methods
import { RespondWithError } from '@v1services/respondService.js'

// Import controller methods
import {
    GetTraining,
    StartTraining
} from '@v1controllers/trainingController.js'



// -- == [[ ROUTE ENDPOINT METHODS TO CONTROLLERS ]] == -- \\

// /api/v1/training
trainingRouter.route('/')
    // GET /api/v1/training
    .get(GetTraining)
    // POST /api/v1/training
    .post(StartTraining);

// /api/v1/training/?
trainingRouter.route('*')
    // GET /api/v1/training
    .get((req, res) => {
        RespondWithError(res, "INVALID_ENDPOINT", 404);
    })


// -- == [[ EXPORT trainingRouter | ENDPOINT: /api/v1/training ]] == -- \\

export default trainingRouter;