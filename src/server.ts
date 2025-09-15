import express from 'express';
import router from 'src/routes/routes'
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config()
const app = express();

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.listen(process.env.REST_PORT, () => {
    console.log("Running server on port: " + process.env.REST_PORT);
});
