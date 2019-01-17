require("../config/database");

var ForumEntry = require('../models/forumentry');

var entry = new ForumEntry({
	forum: 'SPON',
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

entry.save();

// get all the users
ForumEntry.find({}, function(err, entries) {
  if (err) throw err;
  // object of all the users
  console.log("Anzahl Elemente: " + entries.length);
});
