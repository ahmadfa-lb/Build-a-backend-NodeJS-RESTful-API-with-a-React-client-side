import express from "express";
// import bodyParser from "body-parser";
import { StatusCodes } from 'http-status-codes';

import userService from './services/user.service';

const router = express.Router();

const STATUS = {
    success : 'OK',
    failure : 'NO',
}

// localhost:3000/
router.get('/' , (req ,res) => {
    res.status(StatusCodes.OK); //CREATED
    res.send('Hello You!');
});


router.post('/add', (req, res) =>{
    const data = [];
    const { body: user } = req;

    userService.addUser()
    if (!user.name) {
        return res.status(StatusCodes.BAD_REQUEST).send({
            status : STATUS.failure,
            message : 'name is required',
        });
    }

    return res.status(StatusCodes.CREATED).send({
        status : STATUS.success,
        message: data,
    });
});

// module.exports = router; // normal js 
export default router; // ES6


//vid 15:36