'use strict';

var express = require('express');
var cors = require('cors');

// require and use "multer"...
var multer = require('multer');
var upload = multer();

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

//file upload middleware
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  // req.file is the `upfile` file
  // req.body will hold the text fields, if there were any
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
})



app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
