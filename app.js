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
});

app.get('/:time', (req, res)=>{
  
  //make sure the response format will be a JSON object
  res.set('content-type', 'application/json');
  //store the time provided in the url as a variable
  const entry = req.params.time;
  //declare variables for unix date, natural date and the date JSON object
  let unix, natural, date;
  //if the entry is an integer (2321313212131) and *only* an integer (not a2323213):
  
  if (parseInt(entry) == entry){
    //store it as a unix date
    unix = moment(entry, "x").format("x");
    //convert the unix date to a natural language date
    natural = moment(entry, "x").format("MMMM DD, YYYY");
  }
  
  //if the date is *not* a unix date (basically, if its not an integer (even a1123)):
  else {
    //store it as a natural date (still even a1123)
    natural = moment(entry).format("MMMM D, YYYY");
    //convert the natural date to a unix date
    unix = moment(natural).format("x");
  }
  
  //if the date is not valid (like that a1123)
  if (!moment(natural).isValid() || !moment(unix, "x").isValid()){
    //set the date to null
    unix=null, natural=null;
  }
  //store the date as a JSON Object
  date = {"unix": unix, "natural": natural}
  //send the date JSON Object
  res.send(date);
  res.end();
});
//listen to the port being used
app.listen(process.env.PORT);
