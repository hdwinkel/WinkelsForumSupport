'use strict';


/**
 * Endpoint to create an Entry
 * This endpoint creates an entry
 *
 * entry Entry 
 * returns Entry
 **/
exports.createEntry = function(entry) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "articleName" : "Name des Artikels",
  "publishedLink" : "www.meinforum.de/winkel",
  "answerDate" : "2019-01-03T18:35:00.000Z",
  "answerName" : "Name des Forumbeitrags",
  "answerText" : "das ist der Forumsbeitrag",
  "articleText" : "Der zusammengefasste Text des Artikels",
  "published" : true,
  "tags" : ["Politics", "IT"],
  "forum" : {
    "name" : "Mein Forum",
    "id" : "meinforum"
  },
  "articleLink" : "www.meinforum.de",
  "articleDate" : "2019-01-03T18:18:12.000Z",
  "_id" : "5c2f202b99df81fe887463c4",
  "publishedDate" : "2019-01-03T19:10:00.000Z",
  "user" : "winkel"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List all forum entries (for a specific user) according query parameters
 *
 * limit Integer How many entries to return at one time (max 100) (optional)
 * q String searchstring (optional)
 * returns Entries
 **/
exports.listEntries = function(limit,q) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get all entries per forum
 *
 * forumId String The id of the entry to retrieve
 * limit Integer How many entries to return at one time (max 100) (optional)
 * q String searchstring (optional)
 * returns Entries
 **/
exports.listEntriesPerForum = function(forumId,limit,q) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * a specific entry per ID
 *
 * entryId String The id of the entry to retrieve
 * returns Entry
 **/
exports.showEntryById = function(entryId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "articleName" : "Name des Artikels",
  "publishedLink" : "www.meinforum.de/winkel",
  "answerDate" : "2019-01-03T18:35:00.000Z",
  "answerName" : "Name des Forumbeitrags",
  "answerText" : "das ist der Forumsbeitrag",
  "articleText" : "Der zusammengefasste Text des Artikels",
  "published" : true,
  "tags" : "",
  "forum" : {
    "name" : "Mein Forum",
    "id" : "meinforum"
  },
  "articleLink" : "www.meinforum.de",
  "articleDate" : "2019-01-03T18:18:12.000Z",
  "_id" : "5c2f202b99df81fe887463c4",
  "publishedDate" : "2019-01-03T19:10:00.000Z",
  "user" : "winkel"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

