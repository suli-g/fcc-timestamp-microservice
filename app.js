const http = require('express');
const app = express();
app.createServer((req, res)=>{
  console.log(req);
  res.end("!");
});
http.listen(process.env.PORT);