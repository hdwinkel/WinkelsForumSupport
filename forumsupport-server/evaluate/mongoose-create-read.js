require("../config/database");

var ForumEntry = require('../models/forumentry');
const crypto = require("crypto");
var ObjectId = require('mongoose').Types.ObjectId;

var entryid = new ObjectId(crypto.randomBytes(12).toString("hex")); // create a mongodb compatible unique id

var entry = new ForumEntry({
	_id: entryid,
	forum: 'SPON',
	forum: {
		name : "Testorum",
		id : "Test Forum 1"
	  },
	user: 'winkel',
	tags: ['#Politics', '#Russia', '#Economy'],
	articleName: 'Name des Artikels',
	articleDate: new Date('2019-01-17T13:00:00Z'),
	articleLink: 'http://www.spiegel.de',
	articleText: 'Der zusammengefasste Text des Artikels',
	answerDate: new Date('2019-01-17T13:05:00Z'),
	answerName: 'Name des Forumbeitrags',
	answerText: 'das ist der Forumsbeitrag',
	published: true,
	publishedDate: new Date(),
	publishedLink: 'http://www.spiegel.de/winkel'
});

console.log("EntryId: " + entryid);
entry.save(function (err, rentry) {
	if (err) throw err;
	console.log("Created Entry: ");
  	console.log(rentry);
  });

// get all the entries
ForumEntry.find({}, function(err, entries) {
	if (err) throw err;
	// object of all the entries
	console.log("Anzahl Entries: " + entries.length);
  });
  
