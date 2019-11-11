const db = require('../services/db-connection');
const GET_USER_BY_USERNAME = 'SELECT * from users where username = ?';
const GET_ALL_USERS = 'SELECT * from users';

class User {
    constructor(username) {
        this.username = username;
    }

    static getUserByUsername(username) {
        return new Promise(function (resolve, reject) {
            db.query(GET_USER_BY_USERNAME, [username], function (error, results) {
                if (error) {
                    reject(error);
                } else {
                    const { username } = results[0];
                    resolve(new User(username));
                }
              });
        })
    }

    static getAllUsers() {
        return new Promise(function (resolve, reject) {
            db.query(GET_ALL_USERS, function (error, results) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        resolve(results.map((user) => {
                            const { username } = user;
                            return new User(username);
                        }));
                    } catch(err) {
                        reject(err);
                    }
                }
              });
        })
    }
}

module.exports = User;