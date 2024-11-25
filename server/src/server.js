import express from "express";
// import bodyParser from "body-parser";
// import { StatusCodes } from 'http-status-codes'
import appRoutes from './routes.js'

const app = express();
// const port = process.env.PORT;
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
// app.use(bodyParser.json());  // same as above ⇱

app.use('/v1', appRoutes)


app.listen(port, () =>{
    console.log(`Server is running on port ${port}  http://localhost:${port}`);
});

