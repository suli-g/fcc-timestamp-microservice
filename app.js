const express = require('express');
const app = express();
const url = require('url');
app.get('/:time', (req, res)=>{
  if (!req.params.time) res.write(`<h2>enter a date in unix or a natural format as a parameter in the url</h2> <blockquote> <h3>For example:</h3><p>${req.originalUrl}/20 March 2015</p></blockquote>`)
  res.set('charset', 'utf8');
  res.write(req.params.time);
  res.end();
});
app.listen(process.env.PORT);