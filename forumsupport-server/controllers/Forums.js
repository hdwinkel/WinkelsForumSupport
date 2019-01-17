'use strict';

var utils = require('../utils/writer.js');
var Forums = require('../service/ForumsService');

module.exports.listForums = function listForums (req, res, next) {
  Forums.listForums()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
