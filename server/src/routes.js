import express from "express";
// import bodyParser from "body-parser";
import { StatusCodes } from 'http-status-codes';

import userService from './services/user_service';

const router = express.Router();

const STATUS = {
    success : 'OK',
    failure : 'NO',
}

// localhost:3000/
router.get('/ping' , (req ,res) => {
    res.status(StatusCodes.OK); //CREATED
    res.send('OK!');
});


router.post('/add', (req, res) =>{
    const { body: user } = req;

    const addedUser = userService.addUser(user)
    // if (!user.name) {
    //     return res.status(StatusCodes.BAD_REQUEST).send({
    //         status : STATUS.failure,
    //         message : 'name is required',
    //     });
    // }

    return res.status(StatusCodes.CREATED).send({
        status : STATUS.success,
        message: addedUser,
    });
});


router.put('/update/:id', (req, res) =>{
    const { body: user } = req;

    const id = parseInt(req.params.id, 10);

    const updatedUser = userService.updateUser(id, user);

    if (updatedUser) {
        return res.status(StatusCodes.OK).send({
            status : STATUS.success,
            message: updatedUser,
        });
    } else {
        return res.status(StatusCodes.NOT_ACCEPTABLE).send({
            status : STATUS.failure,
            message: `user "${id}" is not found`,
        });
    }


});

// module.exports = router; // normal js 
export default router; // ES6

