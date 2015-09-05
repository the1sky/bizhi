var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'presentation';

	var global = 3;
	var count = 0;
	var output = {};

	/**
	 * 渲染
	 * @param count
	 */
	var renderView = function(count){
		if( count >= global ){
			view.render('presentation',output);
		}
	}
	keystone.list('Presentation' ).model.find().exec(function(err,data){
		//get Slide and Render the view
		var newData = [];
		var len = data.length;
		for( var i=0; i<len; i++ ){
			var categoryItem = data[i];
			if( categoryItem.localFiles && categoryItem.localFiles.length > 0 ){
				var name = categoryItem.name;
				var localFilesLen = categoryItem.localFiles.length;
				for( var j = 0; j< localFilesLen;j++){
					var item = categoryItem.localFiles[j];
					var outputItem = {
						name:name,
						filename:item.filename,
						path:'images/upload/presentation/' + item.filename
					};
					newData.push( outputItem );
				}
			}
		}
		output['list'] = newData;
		count++;
		renderView( count );
	});

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
		count++;
		renderView( count );
	})
};
