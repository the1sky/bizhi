var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'culture';

	var global = 3;
	var count = 0;
	var output = {};

	/**
	 * 渲染
	 * @param count
	 */
	var renderView = function(count){
		if( count >= global ){
			view.render('culture',output);
		}
	}

	keystone.list('Culture' ).model.find().exec(function(err,data){
		//get Slide and Render the view
		output['list'] = data;
		output['list_type'] = 'culture-details';
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
