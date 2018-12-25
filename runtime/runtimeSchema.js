// Load required packages
var mongoose = require('mongoose');

// Define the runtime schema
var Runtime = new mongoose.Schema({
	cpu: String,
	ram: String,
	disk: String,
	instances: String,
	host_type: String,
	network_zone: String
});

// Export the Mongoose model
module.exports = mongoose.model('Runtime', Document);