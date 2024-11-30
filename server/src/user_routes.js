import express, { response } from "express";
import { StatusCodes } from 'http-status-codes';
import { expressYupMiddleware } from 'express-yup-middleware';

import userControllers from "./controllers/user_controllers";
import userService from './services/user_service';
import { addUser, updateUser } from './user_schemas';

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

router.post('/', 
    expressYupMiddleware({schemaValidator: addUser}),
    userControllers.addUser
);


router.put('/:id',
    expressYupMiddleware({schemaValidator: updateUser}),
    userControllers.updateUser
    );


router.delete('/:id', (req, res) => {
    const { params } = req;

    const id = parseInt(params.id, 10);
    const user = userService.getUser(id);
    if (user)
    {
        const status = userService.removeUser(id);
        return res.status(StatusCodes.OK).send( {
            status: STATUS.success,
            message: `user ${id} has been deleted.`,
        });
    } else {
        return res.status(StatusCodes.NOT_FOUND).send({
            status: STATUS.failure,
            message: `user ${id} hasn't been found.`,
        })
    }

})

// module.exports = router; // normal js 
export default router; // ES6
