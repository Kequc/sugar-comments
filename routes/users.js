"use strict";
var express = require('express');

module.exports = (dbs, opt) =>
{
  let router = express.Router();
  let db = dbs.user;
  
  router.get('/', (req, res) => {
    res.json({
      status: 'ok',
      message: "SugarComments is running!"
    });
  });
  
  router.get('/:id', (req, res) => {
    db.doc.read(req.params['id'], (err, user) => {
      if (err)
        res.status(404).json({ status: 'error', name: err.name, message: err.message });
      else
        res.json(user.body);
    });
  });
  
  return router;
};
