import users from '../data/users_data';

const get = (userId) => {
    const findUser = users.find((user) => {
        if (user.id === userId) {
            return user;
        }
        return null;
    });

    return findUser || null;
};

const getAll = () => {
    return users;
} 

const update = (userId, newDetails) => {
    let existingUser = null;
    let userIndex;
    users.map((user, index) => {
        if (user.id === userId) {
            existingUser = user;
            userIndex = index;
        }
    });

    if (!existingUser) {
        return false;
    }

    let updatedUser = {
        ...existingUser,
        ...newDetails
    }

    users.splice(userIndex ,1 , updatedUser);

    return updatedUser;
};


const insert = (details) => {
    const newUser = {...details, id: users.length+1}
    users.push(newUser);

    return newUser;
};

const remove = (userId) => {
    
    const deleteUser = (user, index) =>{
        if( user.id === userId) {
            // Remove the array element of  the  found user
            users.splice(index, 1);
            return true;
        }
        return false;
    };
    return users.find(deleteUser);
    
};



export default{
    get,
    getAll,
    update,
    insert,
    remove,
};