const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  // title: { type: String, required: true }, //bez tłumaczenia błędów
  title: { type: String, required: [true, `Pole 'Tytuł' jest wymagane`] },
  // description: { type: String, required: true }, //bez tłumaczenia błędów
  description: { type: String, required: [true, `Pole 'Opis' jest wymagane`] },

  //   comments: { type: String, required: true },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('News', newsSchema);
