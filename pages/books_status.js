let BookInstance = require('../models/bookinstance');

exports.show_all_books_status = async function(res) {
  console.log("Test", BookInstance.find({status: 'Available'}))
  return res.send(await BookInstance.find({status: 'Available'}).exec());
}