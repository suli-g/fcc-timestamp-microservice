const express = require('express');
const app = express();
const url = require('url');
const moment = require('moment');
app.get('/', (req, res)=>{
  res.set({
        'content-type': 'application/json',
        'charset': 'utf8'
    })
  res.write(JSON.stringify({"url": process.argv[0]}));
  res.end();
});
app.listen(process.env.PORT);