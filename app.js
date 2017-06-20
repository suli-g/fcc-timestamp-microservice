const express = require('express');
const app = express();
const url = require('url');
const moment = require('moment');
app.set('')
app.use(url.middleware(process.argv[0]));
app.get('/', (req, res)=>{
  re
  res.write(process.argv[1]);
  res.end();
});
app.listen(process.env.PORT);