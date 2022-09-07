const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')
 

app.get('/', function(request, response) {
  console.log('Home page visited!');
  // var pId=request.params.id;
  var jsonObject={},result;
  var request = require('request');
  request('https://api.homecraft.tv:8443/nazca/ophelia/get/metahome', function (error, res) {
    if (!error && res.statusCode === 200) {
         jsonObject=JSON.parse( res.body);
       
     } 
     console.log(jsonObject,"qwerty");
   const filePath = path.resolve(__dirname, "./nazca.in", "index.html");
   
   fs.readFile(filePath, "utf8", function (err, data) {
     if (err) {
       return console.log(err);
     }
     data = data.replace(/\$__META_DESCRIPTION__/g, jsonObject[0].description);
     data = data.replace(/\$__META_KEYWORD__/g, jsonObject[0].keyword);
     data = data.replace(/\$__META_FACEBOOK__/g, jsonObject[0].facebook);
     data = data.replace(/\$__META_TWITTER__/g, jsonObject[0].twitter);
     data = data.replace(/\$__META_INSTAGRAM__/g, jsonObject[0].instagram);
     data = data.replace(/\$__META_LINKEDIN__/g, jsonObject[0].linkedin);
     result = data.replace(/\$__META_PINTREST__/g, jsonObject[0].pintrest);
     response.send(result);
   });
});
})

app.get('/info/:name/:id', function(request, response) {
  console.log('About page !');
  console.log(request.params.id);
  var pId=request.params.id;
  var jsonObject={},result;
  var request = require('request');
  request('https://api.homecraft.tv:8443/nazca/ophelia/products/product?pId='+pId, function (error, res) {
    if (!error && res.statusCode === 200) {
         jsonObject=JSON.parse( res.body);
       
     } 
   const filePath = path.resolve(__dirname, "./nazca.in", "index.html");
   
   fs.readFile(filePath, "utf8", function (err, data) {
     if (err) {
       return console.log(err);
     }
     data = data.replace(/\$__META_DESCRIPTION__/g, jsonObject.metatags[0].description);
     data = data.replace(/\$__META_KEYWORD__/g, jsonObject.metatags[0].keyword);;
     data = data.replace(/\$__META_FACEBOOK__/g, jsonObject.metatags[0].facebook);
     data = data.replace(/\$__META_TWITTER__/g, jsonObject.metatags[0].twitter);
     data = data.replace(/\$__META_INSTAGRAM__/g, jsonObject.metatags[0].instagram);
     data = data.replace(/\$__META_LINKEDIN__/g, jsonObject.metatags[0].linkedin);
     result = data.replace(/\$__META_PINTREST__/g, jsonObject.metatags[0].pintrest);
     response.send(result);
   });
});
})

app.get('/contact', function(request, response) {
  console.log('Contact page visited!');
  const filePath = path.resolve(__dirname, './nazca.in', 'index.html')
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    data = data.replace(/\$OG_TITLE/g, 'Contact Page');
    data = data.replace(/\$OG_DESCRIPTION/g, "Contact page description");
    let fileResult = data.replace(/\$OG_IMAGE/g, "https://i.imgur.com/V7irMl8.png");
    response.send(fileResult);
  });
});

app.use(express.static(path.resolve(__dirname, './nazca.in')));

app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, './nazca.in', 'index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
