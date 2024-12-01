import express, { response } from "express";
import { StatusCodes } from 'http-status-codes';
import { expressYupMiddleware } from 'express-yup-middleware';

import userControllers from "./controllers/user_controllers";
import userService from './services/user_service';
import { addUser, getUser, updateUser, removeUser } from './user_schemas';

const router = express.Router();

const STATUS = {
    success : 'OK',
    failure : 'NO',
}



router.get('/all', 
    userControllers.getAllUsers
);

router.get('/:id',
    expressYupMiddleware({schemaValidator: getUser}),
    userControllers.getUser
);

router.post('/', 
    expressYupMiddleware({schemaValidator: addUser}),
    userControllers.addUser
);


router.put('/:id',
    expressYupMiddleware({schemaValidator: updateUser}),
    userControllers.updateUser
);


router.delete('/:id',
    expressYupMiddleware({schemaValidator: removeUser}),
    userControllers.removeUser
);

// module.exports = router; // normal js 
export default router; // ES6
