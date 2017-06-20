const express = require('express');
const app = express();
const url = require('url');
const moment = require('moment');

app.get((req, res)=>{
  res.writeHead(200, {'Content-type':'application/json'});
  let url_ = url.parse(req.url);
  let time = moment(url_.search.substr(5));
  let pathname = url_.pathname.substr(1);
  res.write(time);
  res.end();
});
app.listen(process.argv[2], (err)=> {if(err) console.log(err)});