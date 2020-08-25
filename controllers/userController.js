const User = require('../models/User');

module.exports = {
  
    findByPk: async (id) => {
        try {
            const user = await User.findByPk(id);
            return user;
        } catch (error) {
            console.error(error.message);
            return error.message;
        }
    }

};