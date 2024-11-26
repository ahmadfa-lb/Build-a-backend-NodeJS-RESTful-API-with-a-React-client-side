import userDao from '../models/Persistence/user_dao'


const getUser = (userId) => {
    return userDao.get(userId);
};

const getAllUsers = () => {
    return userDao.getAll(userId);
};


const updateUser = (userId, details) => {
    return userDao.update(userId, details);
};

const addUser = (details) => {
    return userDao.insert(details);
};

const removetUser = (userId) => {
    return userDao.remove(userId);
};

export default {
    getUser,
    getAllUsers,
    updateUser,
    addUser,
    removetUser,
}