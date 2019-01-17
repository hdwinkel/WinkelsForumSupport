var mongoose = require('mongoose');

var ForumSchema = new mongoose.Schema({
	id: String,
	name: String
});

module.exports = mongoose.model("Forum", ForumSchema);
