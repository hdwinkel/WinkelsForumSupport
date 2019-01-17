'use strict';


/**
 * List of all Forums
 * list all forum names, requires log in
 *
 * returns Forums
 **/
exports.listForums = function() {
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

