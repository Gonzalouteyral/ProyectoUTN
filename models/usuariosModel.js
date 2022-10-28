<<<<<<< HEAD
var pool = require('./bd');
var md5 = require('md5');

async function getUserByUsernameAndPassword(user, password) {
    try {
        var query = "select * from usuarios where usuario = ? and password = ? limit 1";
        var rows = await pool.query(query, [user, md5(password)]);
        return rows[0];

    } catch (error) {
        throw(error);
    }
}

=======
var pool = require('./bd');
var md5 = require('md5');

async function getUserByUsernameAndPassword(user, password) {
    try {
        var query = "select * from usuarios where usuario = ? and password = ? limit 1";
        var rows = await pool.query(query, [user, md5(password)]);
        return rows[0];

    } catch (error) {
        throw(error);
    }
}

>>>>>>> 462795d3be5ece8dd75b5756c24f5e505652b4fb
module.exports = {getUserByUsernameAndPassword}