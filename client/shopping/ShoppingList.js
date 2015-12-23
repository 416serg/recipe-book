Template.ShoppingList.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('shoppingItems');
	});
});


Template.ShoppingList.helpers({
	shoppingList: ()=> {
		return Recipes.find({inMenu: true});
	},
	shoppingItem: () => {
		return ShoppingItems.find();
	}
});

Template.ShoppingList.events({
	'click .add-shop-item': function(e,t) {
		Session.set('newItem', true);
	},
	'click .fa-trash': function(e,t) {
		Meteor.call('deleteShoppingItem', this._id);
	}
});