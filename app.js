const express = require('express');
const app = express();
const url = require('url');
app.get('/:time', (req, res)=>{
  res.send(req.params.id);
  res.end();
});
app.listen(process.env.PORT);