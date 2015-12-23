Template.NewRecipe.events({
	'click .fa-close': function(e,t) {
		Session.set('newRecipe', false);
	}
});