// Load required packages
var mongoose = require('mongoose');

// Define the Service schema
var Service = new mongoose.Schema({
	provides: String,
	depends_on: String,
	buildpacks: String
});

// Export the Mongoose model
module.exports = mongoose.model('Service', Document);