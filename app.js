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
app.set("charset", "utf8");
app.get('/:time', (req, res)=>{
  let entry = new Date(req.params.time), unix, normal, date;
  if (!isNaN(Date.parse(entry))){
    unix = Date.parse(entry);
    normal = entry;
    date = JSON.parse({"unix": unix, "normal": normal});
    console.log(JSON.stringify(date));
  }
  res.set('charset', 'utf8');
  res.send(date);
  res.end();
});
app.listen(process.env.PORT);