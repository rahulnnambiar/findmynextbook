const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title:{type:String, require:true},
    author:{type:String, require:true},
    genre:{type:String, require:true},
    des:{type:String, require:true},
    rating:{type:Number, require:true},
    img:{
        data: Buffer,
        contentType: String
    }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
