import { StatusCodes } from 'http-status-codes';
import userService from '../services/user_service';


const addUser = (req, res) =>{
    const { body: user } = req;

    const addedUser = userService.addUser(user)

    return res.status(StatusCodes.CREATED).send({
        status : STATUS.success,
        user: addedUser,
    });
}

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

export default {
    addUser,
    updateUser
}