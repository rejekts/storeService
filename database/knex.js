const environment = process.env.ENVIRONMENT || "development";
const options = require("../knexfile.js")[environment];
const knex = require("knex")(options);

const retrieveAvailableProxies = () => {
  console.log("hit the cellar");
  return knex("accounts")
    .select("*")
    .where({ user_id: null })
    .then(results => {
      console.log(results.length);
      return results.length.toString();
    });
};

module.exports = { retrieveAvailableProxies };
