const mongoose = require("mongoose");
const schema = mongoose.Schema;

const postuler = new schema({
  idJob: {type:String},
  idUser: {type:String},
  datePost: { type: Date },
});

module.exports = Postuler = mongoose.model("Postuler", postuler);