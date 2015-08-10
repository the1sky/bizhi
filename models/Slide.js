var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Slide Model
 * ==========
 */

var Slide = new keystone.List('Slide');
console.log(Types);

Slide.add({
	name: { type: String, required: true },
	url: { type: Types.LocalFile,dest:'./public/images/upload' }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
});

// Provide access to Keystone
Slide.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});


/**
 * Registration
 */

Slide.defaultColumns = 'name, url, isAdmin';
Slide.register();
