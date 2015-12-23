Template.NewShoppingItem.events({
	'click .fa-close': function(e,t) {
		Session.set('newItem', false);
	}
});