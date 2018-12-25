// Load required packages
var mongoose = require('mongoose');

// Define the SoftwareDependency schema
var SoftwareDependency = new mongoose.Schema({
	name: String,
	version: String,
	licenses: String
});

// Export the Mongoose model
module.exports = mongoose.model('SoftwareDependency', Document);