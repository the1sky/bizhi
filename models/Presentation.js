var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Presentation Model
 * ==========
 */

var Presentation = new keystone.List('Presentation');

Presentation.add({
	name: { type: String, required: true },
	url: { type: Types.LocalFile,dest:'./public/images/upload/presentation' }
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

Presentation.defaultColumns = 'name, content, isAdmin';
Presentation.register();
