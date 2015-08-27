var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Presentation Model
 * ==========
 */

var Presentation = new keystone.List('Presentation');

Presentation.add({
	name: { type: String, required: true },
	localFiles: { 
		type: Types.LocalFiles,
		dest:'./public/images/upload/presentation',
		prefix:'/multiple',
		format:function(item,file){
			return '<img src="' + file.href + '" style="max-width:300px">'
		}}
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
});

// Provide access to Keystone
Presentation.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});

/**
 * Registration
 */

Presentation.defaultColumns = 'name, localFiles, isAdmin';
Presentation.register();
