import users from '../data/users_data';

const get = (userId) => users.find((user) => (user.id === userId));



const getAll = () => users;


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
    const newUser = { id: users.length + 1, ...details}
    users.push(newUser);

    return newUser;
};

const remove = (userId) => {
    
    const deleteUser = (user, index) =>{
        if( user?.id === userId) {
            // Remove the array element of  the  found user
            users.splice(index, 1);
        }
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