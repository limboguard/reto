var express = require("express");
var router = express.Router();
const Mongolib = require("../db/Mongolib");

router.get("/", function (req, res, next) {
  Mongolib.getDatabase((db) => {
    Mongolib.findDocuments(db, (docs) => {
      res.send(docs);
    });
  });
});

router.post("/create", function (req, res, next) {
  if (!req.body) return res.status(404).send("No body given.");

  Mongolib.getDatabase((db) => {
    Mongolib.insertOne(db, req.body, (ans) => {
      if (ans === null) res.send(req.body);
      else res.status(500).send(ans);
    });
  });
});

module.exports = router;
