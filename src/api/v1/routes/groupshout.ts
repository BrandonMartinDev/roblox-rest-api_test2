// -- == [[ CONFIG ]] == -- \\

// Initialize Express
import express from 'express';
const groupShoutRouter = express.Router();

// Import controller methods
import {
    GetGroupShout,
    ChangeGroupShout
} from '@v1controllers/groupshoutController.js'



// -- == [[ ROUTE ENDPOINT METHODS TO CONTROLLERS ]] == -- \\

// /api/v1/groupshout
groupShoutRouter.route('/')
    // GET /api/v1/groupshout
    .get(GetGroupShout)
    // POST /api/v1/groupshout
    .post(ChangeGroupShout);



// -- == [[ EXPORT groupShoutRouter | ENDPOINT: /api/v1/groupshout ]] == -- \\

export default groupShoutRouter;