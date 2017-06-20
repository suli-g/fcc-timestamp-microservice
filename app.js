'use strict';
const express = require('express');
const moment = require('moment');
const app = express();
const url = require('url');
app.get('', (req, res)=>{
   res.set('charset', 'utf8');
  let msg = "<h2>enter a date in either unix or a natural format as a parameter in the url</h2>";
  let directions = `<p>unix: ${req.hostname}/123232131</p>`;
  directions += `<p>natural: ${req.hostname}/30 June 2013</p>`;
  directions += "<p>if natural dates aren't working as they should, replace the spaces with %20:<br>";
  directions += `${req.hostname}/30<strong>%20</strong>June<strong>%20</strong>2013</p>`
  msg += `<blockquote> <h3>Examples:</h3>${directions}</blockquote>`;
  res.send(msg);
  res.end();
})
app.get('/:time', (req, res)=>{
  res.set('charset', 'utf8');
  let entry = req.params.time;
  let date = new Date(entry)
  res.send(date);
  res.end();
});
app.listen(process.env.PORT);