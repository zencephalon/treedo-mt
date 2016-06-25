Template.tree.events({
  'click': function (event) {
    event.stopPropagation();
    TreeView.focus.byId(this._id);
  }
});

Template.tree.helpers({
  display_kids: tree => tree.kids(),
  folded_class: tree => (tree.folded ? 'folded' : ''),
  visible_class: tree => (
    (tree.archived && Session.get('archive')) ? 'hidden' : 'visible'
  ),
  archived_class: tree => (tree.archived ? 'archived' : ''),
  focused_class: tree => (tree.focused ? 'focused' : ''),
});
