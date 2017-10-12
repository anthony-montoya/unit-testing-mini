const functions = require('./users');
const users = require('./mockData/userData');

test('clearPasswords() should clear all the passwords', function() {
    const updatedUserArray = functions.clearPasswords(users);
    const taskComplete = true;
    updatedUserArray.map(user => {
        if(user.password) taskComplete = false;
    })
    expect(taskComplete).toEqual(true);
})