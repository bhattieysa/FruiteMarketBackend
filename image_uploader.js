const Multer = require("fastify-multer");
const { excuteQuery } = require("./config/db");
const fs = require('fs');
const { pool } = require("./config/db")
const { genSaltSync, hashSync, compareSync, compare } = require("bcrypt");

var storage = Multer.diskStorage({
    destination: function(req, file, cb) {
        fs.mkdir('./uploads/',(err)=>{
            cb(null, './uploads/');
         });
    },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
    // reject a File
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    }else {
        console.log('Please Chnage Formate')
        cb(null, false)
    }
}

const upload = Multer({storage: storage, 
    limits: {
        fileSize: 1024 * 1024 * 10 //10mb
    },
    fileFilter: fileFilter
});
// let fieldsUpload = upload.single("file");
let fieldsUpload = upload.array("image");


module.exports = {
  upload
};