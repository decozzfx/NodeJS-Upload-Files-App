// logic for Uploading Files
const multer = require('multer')
const fs = require('fs')

const dir = './public/images/nov'   // directory
if(!fs.existsSync(dir)){    // if the directory doesnt exist
    fs.mkdirSync(dir, { recursive : true })  // make the directory
}

const fileStorageEngine = multer.diskStorage({
    destination : (req, file, cb) => {
        cb ( null, dir)
    },
    filename : (req, file, cb) => {
        cb( null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage : fileStorageEngine})

module.exports = upload