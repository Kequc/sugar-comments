"use strict";
var express = require('express');
var serveStatic = require('serve-static');
var _ = require('underscore');

module.exports = (opt) =>
{
  opt = _.extend({
    
  }, opt || {});
  
  let router = express.Router();
  router.use(serveStatic('./public'));
  router.get('/comments', require('./routes/comments')(opt));
  router.get('/users', require('./routes/users')(opt));
  return router;
};
