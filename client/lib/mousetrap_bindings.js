Mousetrap.bind('down', function() {
  TreeView.focus.nextSibling();
});
Mousetrap.bind('shift+down', function() {
  TreeView.move.nextSibling();
});
Mousetrap.bind('up', function() {
  TreeView.focus.prevSibling();
});
Mousetrap.bind('shift+up', function() {
  TreeView.move.prevSibling();
});
Mousetrap.bind('left', function() {
  TreeView.focus.parent();
});
Mousetrap.bind('right', function() {
  TreeView.focus.children();
});
Mousetrap.bind('alt+h', function() {
  TreeView.toggleArchiveView();
})
Mousetrap.bind('space', function() {
  var tree = Tree.focused();
  if (! tree.archived) {
    TreeView.removeFocused();
  } else {
    Tree.focused().toggleArchive();
  }
  return false;
});
Mousetrap.bind('ctrl+n', function() {
  TreeView.handleCreateForm()
});
Mousetrap.bind('ctrl+x', function() {
  TreeView.removeFocused();
});
Mousetrap.bind('ctrl+s', function() {
  $('#focus-edit-text').focus();
});
Mousetrap.bind('enter', function() {
  Tree.focused().toggleFold();
});
