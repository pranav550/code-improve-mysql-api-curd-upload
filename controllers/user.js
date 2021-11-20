const Users = require('../model/Users');

var addUser = (req, res) => {
    let data = new Users(req.body);
    Users.create(data, function (err, results) {
        if (err) {
            res.send(err)
        }
        res.json(results)
    })
}

var userList = (req, res) => {
    Users.findAll(function (err, results) {
        if (err) {
            res.send(err)
        }
        res.json(results)
    })
}

var userInfo = (req, res) => {
    Users.findById(req.params.id, function (err, results) {
        if (err) {
            res.send(err)
        }
        res.json(results)
    })
}

var userUpdate = (req, res) => {
    let data = new Users(req.body);
    Users.update(data, req.params.id, function (err, results) {
        if (err) {
            res.send(err)
        }
        res.json(results)
    })
}

var userDelete = (req, res) => {
    Users.delete(req.params.id, function (err, results) {
        if (err) {
            res.send(err)
        }
        res.json(results)
    })
}

var userProfile = (req, res) => {
    console.log(req.file)
    res.json({ message: 'uploaded' })
}

module.exports = {
    addUser,
    userList,
    userInfo,
    userUpdate,
    userDelete,
    userProfile
}