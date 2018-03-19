const mongoose = require('mongoose');


const ObjectSchema = mongoose.Schema({
	name:{
		type:String
	},
	description:{
		type:String
	},
	image_path:{
		type:String
	},
	view_count{
		type:Number
	},
	upload_date:{
		type:Date
	}
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
	}
},{ collection: 'object'});


const Obj = module.exports = mongoose.model('Obj',ObjectSchema);


module.exports.getObjectById = function(id,callback){
	Obj.findById(id,callback);
}

module.exports.getObjectByCat = function(category_id,callback){
	const query= {cat_id:category_id};
	Obj.findById(query,callback);
}