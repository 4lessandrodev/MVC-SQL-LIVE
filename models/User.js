const conect = require('../config/database');
class User {

    constructor(name, email, password) {
        this.name = String(name);
        this.email = String(email);
        this.password = String(password);
    }

    static async findByPk(id) {
        const result = await conect.promise().query(`SELECT * FROM users WHERE id = ${id};`);
        return result[0][0];
    }

    static async create(user) {
        const result = await conect.promise().query(`INSERT INTO users SET ?`, [user]);
        return result;
    }

    static async update(user) {
        const result = await conect.promise().query(`UPDATE users SET ? WHERE id = ?`, [user, id]);
        return result;
    }

    static async findAll(limit = 21) {
        const result = await conect.promise().query(`SELECT * FROM users LIMIT ${limit}`);
        return result;
    }

}

module.exports = User;