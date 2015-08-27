var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	var global = 7;
	var count = 0;
	var output = {};

	/**
	 * 渲染
	 * @param count
	 */
	var renderView = function(count){
		if( count >= global ){
			view.render('index',output);
		}
	}
	keystone.list('Slide' ).model.find().exec(function(err,data){
		//get Slide and Render the view
		output['slides'] = data;
		count++;
		renderView( count );
	});
	keystone.list('News' ).model.find().limit(4).exec(function(err,data){
		//get News and Render the view
		//todo，填充默认值
		output['news'] = data;
		count++;
		renderView( count );
	})
	keystone.list('Culture' ).model.find().limit(4).exec(function(err,data){
		//get Culture and Render the view
		//todo，填充默认值
		output['culture'] = data;
		count++;
		renderView( count );
	})
	keystone.list('Overview' ).model.find().limit(4).exec(function(err,data){
		//get Overview and Render the view
		//todo，填充默认值
		output['overview'] = data;
		count++;
		renderView( count );
	})
	keystone.list('Presentation' ).model.find().exec(function(err,data){
		//get Presentation and Render the view
		var newData = [];
		var len = data.length;
		for( var i=0; i < len; i++ ){
			var imageGroup = data[i];
			var localFilesLen = imageGroup.localFiles ? imageGroup.localFiles.length : 0;
			for( var j=0; j< localFilesLen;j++ ){
				newData.push( imageGroup.localFiles[j]);
			}
		}
		newData = newData.slice(0,20);
		output['presentation'] = newData;;
		count++;
		renderView( count );
	})
	keystone.list('Foot' ).model.find().exec(function(err,data){
		//get Foot and Render the view
		//todo，填充默认值
		output['foot'] = data ? data[0] : {};
		count++;
		renderView( count );
	})
	keystone.list('Logo' ).model.find().exec(function(err,data){
		//get Logo and Render the view
		//todo，填充默认值
		output['logo'] = data ? data[0] : {};
		console.log(output['logo']);
		count++;
		renderView( count );
	})
};
