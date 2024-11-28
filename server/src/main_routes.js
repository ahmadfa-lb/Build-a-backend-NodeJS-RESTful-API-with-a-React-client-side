import express from "express";
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

// localhost:3000/
router.get('/ping' , (req ,res) => {
    res.status(StatusCodes.OK); //CREATED
    res.send('OK!');
});

export default router;