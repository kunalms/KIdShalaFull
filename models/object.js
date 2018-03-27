const mongoose = require('mongoose');

const rating = require('./rating');


const ObjectSchema = mongoose.Schema({
	name:{
		type:String,
		required: true
	},
	description:{
		type:String,
		required: true
	},
	original_file_path:{
		type:String
	},
	asset_bundle_path:{
		type:String
	},
	asset_name:{
		type:String
	},
	image_path:{
		type:String
	},
	file_name:{
		type:String
	},
	view_count:{
		type:Number
	},
	upload_date:{
		type:Date
	},
	cat_id:{
		type:String,
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

module.exports.listAll = function(callback){
	Obj.find(callback);
}

