import express from 'express';
const testRoute = express.Router();
import testController from '../controllers/testController.js';
testRoute.route('/')
    .get(testController.getTest);
export default testRoute;
