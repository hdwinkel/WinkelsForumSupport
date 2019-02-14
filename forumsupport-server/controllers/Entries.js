'use strict';

var utils = require('../utils/writer.js');
var Entries = require('../service/EntriesService');

module.exports.createEntry = function createEntry (req, res, next) {

  var entry = req.swagger.params['entry'].value;
  Entries.saveEntryToDB(entry)
    .then(function (entry) {
    // console.log("resp-catch0: " + entry);
      return Entries.createEntry(entry);
    })
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listEntries = function listEntries (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var q = req.swagger.params['q'].value;
  Entries.listEntries(limit,q)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listEntriesPerForum = function listEntriesPerForum (req, res, next) {
  var forumId = req.swagger.params['forumId'].value;
  var limit = req.swagger.params['limit'].value;
  var q = req.swagger.params['q'].value;
  Entries.listEntriesPerForum(forumId,limit,q)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.showEntryById = function showEntryById (req, res, next) {
  var entryId = req.swagger.params['entryId'].value;
  Entries.showEntryById(entryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

