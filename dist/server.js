import 'dotenv/config';
import { PORT, API_URL } from './api/v1/config/defaults.js';
import express from 'express';
const app = express();
const bodyParser = app.use(express.json());
import testRoute from './api/v1/routes/groupshout.js';
app.use(`${API_URL}/groupshout`, testRoute);
app.listen(PORT, () => {
    console.log(`Server is now LIVE @ port: ${PORT}`);
});
