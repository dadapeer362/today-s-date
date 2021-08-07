const express = require("express");
const app = express();

module.exports = app.get("/", (request, response) => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let final_date = `${day}-${month}-${year}`;
  response.send(final_date);
});

app.listen(3000);
