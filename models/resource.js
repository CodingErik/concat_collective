const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create the structure of concat's Resource collection
const resourceSchema = new Schema({
    // stores the link as a string
    link: { type: String, required: true },
    // stores category information
    category: { type: String, required: true },
    // stores the experience level
    experience: { type: String, required: true },
});
// Defines the resource schema from above
const Resource = mongoose.model("Resource", resourceSchema);
// Exports the Resource schema
module.exports = Resource;