// Load required packages
var mongoose = require('mongoose');

// Define the Application schema
var Application = new mongoose.Schema({
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
	domain: String,
	subdomain: String,
	product: String,
	url: String,
	runtime: {
		cpu: String,
		ram: String,
		disk: String,
		instances: String,
		host_type: String,
		network_zone: String
	},
	service: {
		provides: [{
			service_name: String
		}],
		buildpacks: [{
			type: String
		}]
	},
	key: String,
	github: String,
	jira: String,
	jenkins: String,
	cloudfoundry: String,
	iteraplan: String
});

// Export the Mongoose model
module.exports = mongoose.model('Application', Application);
