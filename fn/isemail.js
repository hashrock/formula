"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isemail;
// Copyright 2015 JC Fisher

// ISEMAIL returns true when the `value` matches the regex.
function isemail(value) {
  // credit to http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
};
module.exports = exports["default"];