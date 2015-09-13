var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// Set locals
	locals.section = 'news-details';


	var global = 3;
	var count = 0;
	var output = {};

	/**
	 * 渲染
	 * @param count
	 */
	var renderView = function(count){
		if( count >= global ){
			view.render('news-details',output);
		}
	}
	var newsId = req.query.id;
    keystone.list('News' ).model.find({_id:newsId}).exec(function(err,data){
        //get News and Render the view
        output['news'] = data;
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
		console.log(output['logo']);
		count++;
		renderView( count );
	})
};
