'use strict';
const express = require('express');
const moment = require('moment');
const app = express();
//the default state (if a uer doesn't provide a date):
app.get('', (req, res)=>{
  res.charset = 'utf8';
  let msg = "<h2>enter a date in either unix or a natural format as a parameter in the url</h2>";
  let directions = `<p>unix: ${req.hostname}/123232131</p><p>natural: ${req.hostname}/30 June 2013</p>`;
  directions += "<p>if natural dates aren't working as they should, replace the spaces with %20:<br>";
  directions += `${req.hostname}/30<strong>%20</strong>June<strong>%20</strong>2013</p>`
  msg += `<blockquote> <h3>Examples:</h3>${directions}</blockquote>`;
  res.send(msg);
  res.end();
})
// app.get('/:time', (req, res)=>{
//   if (req.params.time === undefined){
//     console.log("undefined");
//   }
//   res.charset = 'utf8';
//   res.set('content-type', 'application/json');
//   let entry = req.params.time, unix, normal, date;
//   if (parseInt(entry) == entry){
//     unix = moment.unix(entry).format("x");
//     normal = moment(entry, "x").format("MMMM DD, YYYY");
//   }
//   else {
//     normal = moment(entry).format("MMMM DD, YYYY");
//     unix = moment(entry).format("x");
//   }
//   if (!moment(normal).isValid() || !moment(unix).isValid()){
//     unix=null, normal=null;
//   }
//   date = {"unix": unix, "normal": normal}
//   res.send(date);
//   res.end();
});
app.listen(process.env.PORT);