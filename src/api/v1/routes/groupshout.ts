import express from 'express';
const testRoute = express.Router();

import {
    GetGroupShout,
    ChangeGroupShout
} from '@v1controllers/groupshoutController.js'

testRoute.route('/')
    .get(GetGroupShout)
    .post(ChangeGroupShout);


export default testRoute;