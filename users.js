const users = require('./mockData/userData');

module.exports = {
    clearPasswords(arr) {
        arr.map((user) => {
            delete user.password;
        })
        return arr
    }
}