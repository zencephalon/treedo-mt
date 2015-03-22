Template.tree.events({
  'click': function (event) {
    event.stopPropagation();
    TreeView.focus.byId(this._id);
  }
});

Template.tree.helpers({
  display_kids: function(tree) {
    return Session.get("archive") ? tree.kids() : _(tree.kids()).reject(function(tree) { return tree.archived });
  },
  folded_class: function(tree) {
    if (tree.folded) {
      return "folded";
    } else {
      return false;
    }
  },
  archived_class: function(tree) {
    if (tree.archived) {
      return "archived";
    }
  },
  focused_class: function(tree) {
    if (tree.focused) {
      return "focused";
    }
  },
  val: function(tree) {
    val = tree.val;
    if (val > 1) {
      return "<span class='green'>" + val + "</span>";
    } else {
      return "<span class='grey'>" + val + "</span>";
    }
  }
});
