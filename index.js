"use strict";
var express = require('express');
var serveStatic = require('serve-static');
var NanoRecords = require('nano-records');

module.exports = (opt) =>
{
  opt = require('./lib/options')(opt);
  
  let router = express.Router();
  router.use(serveStatic('./public'));
  
  if (opt.couch) {
    let nano = require('nano')(opt.couch);
    let dbs = {
      comments: new NanoRecords(nano, 'sugar-comments', require('./designs/comments.json')), 
      users: new NanoRecords(nano, 'sugar-users')
    };
    
    router.get('/containers', require('./routes/containers')(dbs, opt));
    router.get('/comments', require('./routes/comments')(dbs, opt));
    router.get('/users', require('./routes/users')(dbs, opt));
  }
  else
    console.log("Warning: SugarComments no CouchDB credentials found.");
  
  return router;
};
