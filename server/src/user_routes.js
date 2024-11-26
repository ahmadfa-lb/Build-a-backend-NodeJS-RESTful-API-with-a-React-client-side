import express from "express";
// import bodyParser from "body-parser";
import { StatusCodes } from 'http-status-codes';

import userService from './services/user_service';
import { use } from "react";

const router = express.Router();

const STATUS = {
    success : 'OK',
    failure : 'NO',
}



router.get('/all', (req, res) => {
    const users = userService.getAllUsers();

    if (users.length) {
        return res.status(StatusCodes.OK).send(users);
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status : STATUS.failure,
        message: "no users found.",
    });
});

router.get('/:id', (req, res) => {

    const id = parseInt(req.params.id, 10);
    const user = userService.getUser(id);

    if (user) {
        return res.status(StatusCodes.OK).send({
            status : STATUS.success,
            user,
        });
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status : STATUS.failure,
        message: `user ${id} is not found`,
    });

    
});


router.post('/', (req, res) =>{
    const { body: user } = req;

    const addedUser = userService.addUser(user)

    return res.status(StatusCodes.CREATED).send({
        status : STATUS.success,
        user: addedUser,
    });
});


router.put('/:id', (req, res) =>{
    const { body: user } = req;

    const id = parseInt(req.params.id, 10);

    const updatedUser = userService.updateUser(id, user);

    if (updatedUser) {
        return res.status(StatusCodes.OK).send({
            status : STATUS.success,
            user: updatedUser,
        });
    } else {
        return res.status(StatusCodes.NOT_ACCEPTABLE).send({
            status : STATUS.failure,
            message: `user ${id} is not found.`,
        });
    }


});

// module.exports = router; // normal js 
export default router; // ES6
