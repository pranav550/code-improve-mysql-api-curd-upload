const express = require("express");
const router = express.Router();
const middleware = require('./middleware');
const userCtrl = require('./controllers/user');
const bodyParser = require("body-parser");
const multer = require("multer");



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/')
    },
    filename: function (req, file, cb) {
        let newName = Date.now() + "-" + file.originalname;
        cb(null, newName)
    },
})

const upload = multer({ storage: storage })




// parse application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// parse application/json
router.use(bodyParser.json())




router.post("/add", urlencodedParser, userCtrl.addUser)
router.get("/list", userCtrl.userList)
router.get("/info/:id", userCtrl.userInfo)
router.put("/update/:id", urlencodedParser, userCtrl.userUpdate)
router.delete("/delete/:id", userCtrl.userDelete)
router.post("/profile", upload.single('profile_pic'), userCtrl.userProfile)
//router.post("/profile", upload.array('profile_pic'), userCtrl.userProfile)


module.exports = router
