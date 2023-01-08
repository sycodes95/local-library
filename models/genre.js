const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 100}
});

// Virtual for bookinstance's URL
GenreSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/genre/${this._id}`;
});

GenreSchema.virtual("genrename").get(function () {
  // We don't use an arrow function as we'll need the this object
  return this.name;
});

// Export model
module.exports = mongoose.model("Genre", GenreSchema);
