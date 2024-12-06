import express from "express";
import helmet from "helmet"
import { rateLimit } from 'express-rate-limit'
// import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors"


import mainRoutes from './main_routes.js'
import userRoutes from './user_routes.js'

const app = express();
// const port = process.env.PORT;
const port = 4000;

const limiter = rateLimit({
	windowMs: 60 * 1000, // 1 minutes
	limit: 10, // Limit each IP to 100 requests per `window` (here, per 1 minutes).
})


app.use(compression());
app.use(limiter);
// Middleware to parse JSON bodies
app.use(express.json());
// app.use(bodyParser.json());  // same as above ⇱
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:5173',
}));


app.use('/v1', mainRoutes);
app.use('/v1/user', userRoutes);


app.listen(port, () =>{
    console.log(`Server is running on port ${port}  http://localhost:${port}`);
});

