const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,'./public/media')
    },
    filename: function (req, file, cb) {
        // Change fileName
        let fileName = (Date.now())+path.extname(file.originalname);
        cb(null,fileName);
    }
  })

module.exports = multer({storage});
