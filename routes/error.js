const path = require('path');
const dir = require('../util/path');
const express = require('express');
const routes = express.Router();

routes.use((req,res,next) => {

    res.status(404).sendFile(path.join(dir,'views','error.html'));

});
module.exports = routes;