const express = require("express");
const app = express();
app.post('/', function (req, res) {
  res.send('[]Cheers from express');
});
app.get('/', function (req, res) {
  res.send('[]Cheers from express');
});
app.listen(2142, () => {
 console.log("Server is initialized at port 2142");
}); 