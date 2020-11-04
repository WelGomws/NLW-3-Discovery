const express = require("express");
const path = require("path");
const pages = require("./pages.js");

const route = express();

//utilizar body da request
route.use(express.urlencoded({extended: true}))

// arquivos estaticos
route.use(express.static("public"));
route.set("views", path.join(__dirname, "views"));
route.set("view engine", "hbs");

//rotas
route.get("/", pages.index);
route.get("/orphanages", pages.orphanages);
route.get("/orphanage", pages.orphanage);
route.get("/create-orphanage", pages.createOrphanage);
route.post("/save-orphanage", pages.saveOrphanage);

route.listen(3000);