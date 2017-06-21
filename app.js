'use strict';
const express = require('express');
const moment = require('moment');
const app = express();
//the default state (if a user doesn't provide a date):
app.get('', (req, res)=>{
  res.charset = 'utf8';//set the encoding
  //the message to show:
  let host = req.hostname;/*https://keen-sprite.glitch.me*/
  let msg = "<h2>enter a date in either unix or a natural format as a parameter in the url</h2>";
  let directions = `<p>for unix: ${host}/123232131</p><p>natural: ${host}/30 June 2013</p>`;
  directions += "<p>if natural dates aren't working as they should, replace the spaces with %20:<br>";
  directions += `${req.hostname}/30<strong>%20</strong>June<strong>%20</strong>2013</p>`
  //put the @{directions} in a <blockquote>
  msg += `<blockquote> <h3>Examples:</h3>${directions}</blockquote>`;
  //send the message
  res.send(msg);
  res.end();
})
app.get('/:time', (req, res)=>{
  //make sure the response format will be a json object
  res.set('content-type', 'application/json');
  //store the time provided in the url as a variable
  const entry = req.params.time;
  //declare variables (use 'let' because they change)
  let unix, normal, date;
  //if the entry is an integer (2321313212131) and *only* an integer (not a232321) 
  if (parseInt(entry) == entry){
    unix = moment.unix(entry).format("x");
    normal = moment(entry, "x").format("MMMM DD, YYYY");
  }
  else {
    normal = moment(entry).format("MMMM DD, YYYY");
    unix = moment(entry).format("x");
  }
  if (!moment(normal).isValid() || !moment(unix, "x").isValid()){
    unix=null, normal=null;
  }
  date = {"unix": unix, "normal": normal}
  res.send(date);
  res.end();
});
app.listen(process.env.PORT);