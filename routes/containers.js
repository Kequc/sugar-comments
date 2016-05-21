"use strict";
var express = require('express');

module.exports = (dbs, opt) =>
{
  let router = express.Router();
  let db = dbs.comments;
  
  router.get('/', (req, res) => {
    res.json({
      status: 'ok',
      message: "SugarComments is running!"
    });
  });
  
  router.get('/:id', (req, res) => {
    db.design.view('base', 'container', { key: req.params['id'] }, (err, output) => {
      if (err)
        res.status(500).json({ status: 'error', name: err.name, message: err.message });
      else
        res.json(output.rows);
    });
  });
  
  return router;
};
