Router.route('/', {
  waitOn: function() {
    return Meteor.subscribe("trees");
  },
  action: function() {
    this.render("/");
  }
});