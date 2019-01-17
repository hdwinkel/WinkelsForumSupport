'use strict';
var ForumEntry = require('../models/forumentry');

/**
 * List of all Forums
 * list all forum names, requires log in
 *
 * returns Forums
 **/
exports.listForums = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    ForumEntry.find().distinct('forum', function(err, forumrets) {
      if (err) throw err;
      // forumrets is an array of all forum names
      //console.log("Anzahl Forennamen: " + forumrets.length);
      //console.log(forumrets);

      var forums=[];
      var forum = {};
      for (var i=0; i<forumrets.length; i++) {
        forum = {"id":forumrets[i], "name":forumrets[i]};
        forums.push(forum);
      }
      examples['application/json'] = forums;
      //console.log("Examples: ");
      //console.log(examples);
  
      if (Object.keys(examples).length > 0) {
        resolve(examples[Object.keys(examples)[0]]);
      } else {
        resolve();
      }

    });


  });
}

