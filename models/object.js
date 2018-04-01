const mongoose = require('mongoose');

const Rating = mongoose.model('Rating');


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
		type:String
	},ratings:{
		type:[Rating.schema]
	}
	},{ collection: 'object'});

const Obj = module.exports = mongoose.model('Obj',ObjectSchema);


module.exports.getObjectById = function(id,callback){
	Obj.findById(id,callback);
}

module.exports.findByfield = function(query,callback){
	console.log(query);
	Obj.find(query,callback);

}

module.exports.addObject = function(newObject,callback){
	newObject.save(callback);
}

module.exports.listAll = function(callback){
	Obj.find(callback);
}

module.exports.approveObject = function(id,info,callback){
	console.log(info);
	Obj.update({_id: id },{ $set: {"approve_status": "1","asset_name":info.asset_name,"asset_bundle_path":info.asset_bundle_path} },callback);
}

module.exports.rejectObject = function(id,callback){
	Obj.update({_id: id },{ $set: { "approve_status": "2"} },callback);
}