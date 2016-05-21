"use strict";
var _ = require('underscore');

module.exports = (opt) =>
{
  let defaults = {
    couch: process.env.COUCH
  };
  return _.extend(defaults, _.pick(opt, 'couch'));
};
