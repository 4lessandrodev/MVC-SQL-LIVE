const conect = require('../config/database');
class User {

    constructor() {
        this.id = Number();
        this.email = String();
        this.password = String();
        this.name = String();
    }

    static async findByPk(id) {
        const result = await conect.promise().query(`SELECT * FROM users WHERE id = ${id}`);
        return result;
    }

}

module.exports = User;