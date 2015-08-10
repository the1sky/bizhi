var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Overview Model
 * ==========
 */

var Overview = new keystone.List('Overview');

Overview.add({
	name: { type: Types.Name, required: true },
	content: { type: Types.Name },
	date: { type: Types.Date }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
});

// Provide access to Keystone
Overview.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});

/**
 * Registration
 */

Overview.defaultColumns = 'name, content, isAdmin';
Overview.register();
