const mongoose = require('mongoose');


const RatingSchema = mongoose.Schema({
	rating:{
		type:Number
	},
	user_id:{
		type:String
	},time:{
		type:Date
	}
	});


const Rating = module.exports = mongoose.model('Rating',RatingSchema);
