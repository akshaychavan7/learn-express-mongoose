let BookInstance = require('../models/bookinstance');

exports.show_all_books_status = async function(res) {
  await BookInstance.find({status: 'Available'})
  .populate('book')
  .exec()
  .then(list_bookinstances=> {
    res.send(list_bookinstances.map((bookInstance)=>bookInstance.book.title + " : "+ bookInstance.status))
  })
  .catch(err=> res.send('Status not found'))
}