const express = require('express');
const app = express();
const url = require('url');
app.get('', (req, res)=>{
   res.set('charset', 'utf8');
  res.send("<h2>enter a date in either unix or a natural format as a parameter in the url</h2>");
  res.send(`<blockquote> <h3>Examples:</h3><p>${req.hostname}/20 March 2015</p></blockquote>`);
  res.end();
})
app.get('/:time', (req, res)=>{
  
  res.set('charset', 'utf8');
  res.write(req.params.time);
  res.end();
});
app.listen(process.env.PORT);