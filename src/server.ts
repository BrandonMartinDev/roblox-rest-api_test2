import 'dotenv/config';

import {
    PORT,
    API_URL
} from '@v1config/defaults.js';

import express from 'express';
const app = express();
const bodyParser = app.use(express.json());

import testRoute from '@v1routes/groupshout.js';

app.use(`${API_URL}/groupshout`, testRoute);



app.listen(PORT, () => {
    console.log(`Server is now LIVE @ port: ${PORT}`);
})