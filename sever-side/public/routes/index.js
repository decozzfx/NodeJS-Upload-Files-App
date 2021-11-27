const express = require('express')
const router = express.Router()

const upload = require('../../common.js')

// Get Home page
router.get('/', (req, res) => {
    res.render('index', {title : 'Express upload files using Multer'})
})

// Single File Upload - image key should be passed postman
router.post('/single', upload.single('image'), (req, res, next) => { // route // logic.key 
    console.info(req.file)  // Upload File Description Received
    res.send({
        status : 'success',
        message : 'Upload Successfully',
        data : req.file
    })
})

// Multiple files Upload - Images key should be passed postman
router.post('/multiple', upload.array('images'), (req, res, next) => { // route // logic.key 
    console.info(req.files) // Upload File Description Received
    res.send({
        status : 'Success',
        message : 'Files uploaded Successfully',
        data : req.files,
    })
})

module.exports = router