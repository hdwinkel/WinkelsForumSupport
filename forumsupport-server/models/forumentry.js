var mongoose = require('mongoose');

var ForumEntrySchema = new mongoose.Schema({

	forum: String,
	user: String,
	tags: [String],
	articleName: String,
	articleDate: Date,
	articleLink: String,
	articleText: String,
	answerDate: Date,
	answerName: String,
	answerText: String,
	published: Boolean,
	publishedDate: Date,
	publishedLink: String

});

module.exports = mongoose.model("ForumEntry", ForumEntrySchema);
