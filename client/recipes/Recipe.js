Template.Recipe.onCreated(function() {
	this.editMode = new ReactiveVar(false);
});

Template.Recipe.helpers({
	inMenu: function () {
		return this.inMenu;
	},
	updateRecipeId: function() {
		return this._id;
	},
	editMode: function() {
		return Template.instance().editMode.get();
	}
});

Template.Recipe.events({
	'click .toggle-menu': function (e,t) {
		e.preventDefault();
		Meteor.call('toggleMenuItem', this._id, this.inMenu, function (error, result) {
			if (!error) {
				// console.log('yay');
			}
		});	
	},
	'click .fa-trash': function(e,t) {
		Meteor.call('deleteRecipe', this._id);
	},
	'click .fa-pencil': function(e,t) {
		t.editMode.set(!t.editMode.get());
	}
});