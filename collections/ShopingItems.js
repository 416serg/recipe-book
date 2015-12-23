ShoppingItems = new Mongo.Collection('shoppingItems');

ShoppingItems.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

ShoppingItemSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	amount: {
		type: String,
		label: "Amount"
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date();
		},
		autoform: {
			type: "hidden"
		}
	}
});


Meteor.methods({
	deleteShoppingItem: function(id) {
		ShoppingItems.remove(id);
	}
});

ShoppingItems.attachSchema( ShoppingItemSchema );