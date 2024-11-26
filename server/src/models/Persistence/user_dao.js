import users from '../data/users_data';

const get = (userId) => {
    const findUser = users.find((user) => {
        if (users.id === userId) {
            return user;
        }
        return null;
    });

    return findUser;
};

const getAll = () => {
    return users;
} 

const update = (newDetails) => {
    users.map((user, index) => {
        if (user.id === newDetails.id) {
            
        }
    });
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