const mongoose = require('mongoose');

const rating = require('./rating');


const ObjectSchema = mongoose.Schema({
	name:{
		type:String
	},
	description:{
		type:String
	},
	original_file_path:{
		type:String
	},
	asset_bundle_path:{
		type:String
	},
	image_path:{
		type:String
	},
	view_count:{
		type:Number
	},
	upload_date:{
		type:Date
	},
	cat_id:{
		type:[String],
		required: true
	},
	user_id:{
		type:String,
		required: true
	},
	approve_status:{
		type:Number
	},ratings:{
		type:[rating.RatingSchema]
	}
	},{ collection: 'object'});

const Obj = module.exports = mongoose.model('Obj',ObjectSchema);


module.exports.getObjectById = function(id,callback){
	Obj.findById(id,callback);
}

module.exports.getObjectByCat = function(query,callback){
	Obj.findById(query,callback);
}

module.exports.addObject = function(newObject,callback){
	newObject.save(callback);
}

