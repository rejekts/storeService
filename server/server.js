const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const db = require("../database/knex.js");

const port = process.env.PORT || 6000;
app.use(express.static("dist"));
app.use(
  bodyParser.json({
    strict: false
  })
);
app.get("/proxies/available", (req, res) => {
  //grabbing number of proxies that are not "owned"
  //return proxy count
  console.log("route hit");
  db.retrieveAvailableProxies()
    .then(results => {
      console.log(results, "im here");
      res.status(200).send(results);
    })
    .catch(err => {
      console.log(err);
      console.log("err reaching store db");
      res.status(404).send();
    });
});

app.patch("/proxies/subscribe", (req, res) => {
  let count = req.body.count;
  //call helper function passing in count to subscribe client to proxies
});

app.listen(port, () => {
  console.log(`The store service is available on port ${port}`);
});
//cc and paypal support

//average serveral months-year
//225 ish to start for 5+
//250 per individual
//set passwords(same for all purchased proxies)
//expire every month unless re-upped
//password change upon expiration
