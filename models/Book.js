// DEPENDENCIES
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	authors: [
		{
			name: {
				type: String
			}
		}
    ],
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
});

module.exports = Book = mongoose.model('book', BookSchema);
