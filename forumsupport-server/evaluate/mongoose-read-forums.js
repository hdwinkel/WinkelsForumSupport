require("../config/database");

var ForumEntry = require('../models/forumentry');

// get all the entries
ForumEntry.find({}, function(err, entries) {
	if (err) throw err;
	// object of all the entries
	console.log("Anzahl Elemente: " + entries.length);
});

ForumEntry.find().distinct('forum', function(err, forums) {
	if (err) throw err;
	// forums is an array of all forum names
	console.log("Anzahl Foren: " + forums.length);
	console.log(forums);
});

// get all the entries for a forum
ForumEntry.find({forum: /^FOCUS/}, function(err, entries) {
	if (err) throw err;
	// object of all the entries
	console.log("Entries per 'FOCUS':");
	console.log(entries);
});

// get all the entries for a forum
ForumEntry.find({forum: /^SPON/}, function(err, entries) {
	if (err) throw err;
	// object of all the entries
	console.log("Entries per 'SPON':");
	console.log(entries);
});
