import userDao from '../models/Persistence/user_dao'


const getUser = (userId) => {
    userDao.get(userId);
};

const updateUser = (userId, details) => {
    return userDao.update(userId, details);
};

const addUser = (details) => {
    return userDao.insert(details);
};

const removetUser = (userId) => {
    userDao.remove(userId);
};

export default {
    getUser,
    updateUser,
    addUser,
    removetUser,
}