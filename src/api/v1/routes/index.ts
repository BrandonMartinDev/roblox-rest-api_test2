// -- == [[ CONFIG ]] == -- \\

// Import express
import express from 'express';

// Import services methods
import {
    RespondWithError,
    RespondWithSuccess
} from '@v1services/respondService.js';

// Create v1 Router | ENDPOINT: /api/v1/
const v1Router = express.Router();

// Import routers
import groupShoutRouter from '@v1routes/groupshout.js';



// -- == [[ ROUTE ROUTERS ]] == -- \\

v1Router.use('/groupshout', groupShoutRouter);



// -- == [[ CONFIG DEFAULT ENDPOINTS ]] == -- \\

// GET /api/v1/
v1Router.get('/', (req, res) => {
    RespondWithSuccess(res, `${req.originalUrl} is OK`, 200)
})

// GET /api/v1/?
v1Router.get('*', (req, res) => {
    RespondWithError(res, 'INVALID_ENDPOINT', 404)
})



// -- == [[ EXPORT v1Router | ENDPOINT: /api/v1/ ]] == -- \\

export default v1Router;