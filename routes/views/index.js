var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	var global = 2;
	var count = 0;
	var output = {};

	/**
	 * 渲染
	 * @param count
	 */
	var renderView = function(count){
		if( count >= global ){
			console.log(output);
			view.render('index',output);
		}
	}
	keystone.list('Slide' ).model.find().exec(function(err,data){
		//get Slide and Render the view
		output['slides'] = data;
		count++;
		renderView( count );
	});
	keystone.list('News' ).model.find().exec(function(err,data){
		//get News and Render the view
		//todo，填充默认值
		output['news'] = data;
		count++;
		renderView( count );
	})
};
