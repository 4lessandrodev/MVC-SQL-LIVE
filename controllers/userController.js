const User = require('../models/User');
const Success = Symbol(2);

module.exports = {
  
    show: async (id) => {
        try {
            const user = await User.findByPk(id);
            return user;
        } catch (error) {
            console.error(error.message);
            return error.message;
        }
    },

    store: async (name, email, password) => {
        try {
            const user = new User(name, email, password);
            const result = User.create(user);
            return result;
        } catch (error) {
            console.error(error.message);
            return error.message;
        }
    },

    index: async (limit = 21) => {
        try {
            const users = await User.findAll(limit);
            return users[0];
        } catch (error) {
            console.error(error.message);
            return error.message; 
        }
    }

};