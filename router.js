Router.route('/', {
  waitOn: function() {
    return [Meteor.subscribe("user_trees_unarchived"), Meteor.subscribe("user_trees_archived")];
  },
  action: function() {
    this.render("/");
  }
});