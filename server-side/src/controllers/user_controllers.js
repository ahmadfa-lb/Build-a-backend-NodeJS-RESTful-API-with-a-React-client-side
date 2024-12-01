import { StatusCodes } from 'http-status-codes';
import userService from '../services/user_service';

const STATUS = {
    success : 'OK',
    failure : 'NO',
}

const getAllUsers = (req, res) => {
    const users = userService.getAllUsers();

    if (users.length) {
        return res.status(StatusCodes.OK).send(users);
    }

    return res.status(StatusCodes.NOT_FOUND).send({
        status : STATUS.failure,
        message: "no users found.",
    });
};

const getUser = (req, res) => {

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

    
};

const addUser = (req, res) =>{
    const { body: user } = req;

    const addedUser = userService.addUser(user)

    return res.status(StatusCodes.CREATED).send({
        status : STATUS.success,
        user: addedUser,
    });
};

const updateUser =  (req, res) =>{
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
};

const removeUser = (req, res) => {
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

};

export default {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    removeUser
}