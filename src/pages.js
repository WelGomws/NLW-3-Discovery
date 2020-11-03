const orphanages = require("./database/fakedata.js");

module.exports = {
  index(resquest, response) {
    response.render("index");
  },
  orphanages(resquest, response) {
    response.render("orphanages", { orphanages });
  },
  orphanage(resquest, response) {
    response.render("orphanage");
  },
  createOrphanage(resquest, response) {
    response.render("create-orphanage");
  },
};
