// Load required packages
var mongoose = require('mongoose');

// Define the document schema
var Document = new mongoose.Schema({
	owner: String,
	data_format_version: String,
	description: String,
	type: String,
	vcsroot: String,
    name: String,
	short_name: String,
	id: String,
	contact: String,
	created: String,
	lastUpload: String,
	lastUpdate: String,
	status: String,
	product_context: String,
	github: String,
	jira: String,
	jenkins: String,
	cloudfoundry: String,
	iteraplan: String,
	domain: String,
	subdomain: String,
	product: String,
	url: String,
	runtime: mongoose.Schema.Types.ObjectId,
	software_dependencies: mongoose.Schema.Types.ObjectId,
	service: mongoose.Schema.Types.ObjectId
});

// Export the Mongoose model
module.exports = mongoose.model('Document', Document);
