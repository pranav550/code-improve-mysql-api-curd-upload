var connection = require("../config/db");

var Users = function (users) {
    this.name = users.name;
    this.email = users.email;
    this.gender = users.gender;
    this.created_at = new Date();
}

Users.create = (data, cb) => {

    connection.query('Insert Into users Set ?', [data], function (err, results, field) {
        if (err) {
            cb(null, error)
        }
        cb(null, { message: 'added', lastId: results.insertId });
    });
}

Users.findAll = (cb) => {
    let sqlQuery = 'Select * from users';
    connection.query(sqlQuery, function (err, results, field) {
        if (err) {
            cb(null, error)
        }
        cb(null, results);
    });
}


Users.findById = (id, cb) => {
    connection.query('Select * from users where id=?', [id], function (err, results, field) {
        if (err) {
            cb(null, error)
        }
        cb(null, results);
    });
}

Users.update = (data, id, cb) => {
    connection.query('Update users set name=?,email=?,gender=? where id=?', [data.name, data.email, data.gender, id], function (err, results, field) {
        if (err) {
            cb(null, error)
        }
        cb(null, { message: "Updated" });
    });
}

Users.delete = (id, cb) => {
    connection.query('Delete from users where id=?', [id], function (err, results, field) {
        if (err) {
            cb(null, error)
        }
        cb(null, { message: "Deleted" });
    });
}

module.exports = Users;