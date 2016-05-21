"use strict";
var express = require('express');

module.exports = (opt) =>
{
  opt = opt || {};
  
  let router = express.Router();
  
  router.get('/', (req, res) => {
    res.json({
      status: 'ok',
      message: "SugarComments is running!"
    });
  });
  
  return router;
};
