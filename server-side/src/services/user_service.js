import userDao from '../models/Persistence/user_dao'


/**
 * Get all users
 * @returns 
 */
const getAllUsers = () => userDao.getAll();

/**
 * Get a user by ID.
 * @param {integer} userId
 * @returns 
 */
const getUser = (userId) => userDao.get(userId);

/**
 * Update a user.
 * @param {integer} userId
 * @param {object} details 
 * @returns 
 */
const updateUser = (userId, details) => userDao.update(userId, details);

/**
 * Add a user.
 * @param {object} details 
 * @returns 
 */
const addUser = (details) => {
    return userDao.insert(details);
};

/**
 * Remove a user
 * @param {integer} userId
 * @returns {*}
 */
const removeUser = (userId) => {
    return userDao.remove(userId);
};

export default {
    getUser,
    getAllUsers,
    updateUser,
    addUser,
    removeUser,
}