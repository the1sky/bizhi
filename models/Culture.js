var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Culture Model
 * ==========
 */

var Culture = new keystone.List('Culture');

Culture.add({
	name: { type: String, required: true },
	thumbimage: { type: Types.LocalFile,dest:'./public/images/upload/culture' },
	content: { type: Types.Text },
	date: { type: Types.Date }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
});

// Provide access to Keystone
Culture.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});

/**
 * Registration
 */

Culture.defaultColumns = 'name, content, isAdmin';
Culture.register();
