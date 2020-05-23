var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    isCompleted: {
      type: Boolean,
      default: false
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user"
    }
  },
  { timestamps: true }
);

var Note = mongoose.model("note", noteSchema);

module.exports = Note;
