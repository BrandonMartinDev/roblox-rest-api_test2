// -- == [[ CONFIG/IMPORTS ]] == -- \\

// Configure dotenv
import 'dotenv/config';


// Initialize express
import express from 'express';
const app = express();
app.use(express.json());


// Import defaults
import {
    PORT,
    API_URL
} from '@v1config/defaults.js';


// Import Services
import {
    RespondWithError,
    RespondWithSuccess
} from './api/v1/services/respondService.js';


// Import routers
import v1Router from '@v1routes/index.js';



// -- == [[ ROUTE ROUTERS ]] == -- \\

app.use(`${API_URL}/`, v1Router);



// -- == [[ CONFIG DEFAULT ENDPOINTS ]] == -- \\

app.get('/', (req, res) => {
    RespondWithSuccess(res, 'Server is OK', 200);
})

app.get('*', (req, res) => {
    RespondWithError(res, `${req.originalUrl} is not a valid endpoint. Please try: /api/v1/{ENDPOINT_HERE}`, 404);
})



// -- == [[ CONFIG SERVER LISTENER ]] == -- \\

app.listen(PORT, () => {
    console.log(`Server is now LIVE @ port: ${PORT}`);
})