Mousetrap.bind('down', TreeView.focus.nextSibling);
Mousetrap.bind('shift+down', TreeView.move.nextSibling);
Mousetrap.bind('up', TreeView.focus.prevSibling);
Mousetrap.bind('shift+up', TreeView.move.prevSibling);
Mousetrap.bind('left', TreeView.focus.parent);
Mousetrap.bind('right', TreeView.focus.children);

Mousetrap.bind('space', function() {
  Tree.focused().incCount(true);
  return false;
});
Mousetrap.bind('shift+space', function() {
  Tree.focused().incCount(true, true);
  return false;
});
Mousetrap.bind('ctrl+n', TreeView.handleCreateForm);
Mousetrap.bind('ctrl+x', TreeView.removeFocused);

Mousetrap.bind('ctrl+s', function() {
  $('#focus-edit-text').focus();
});

Mousetrap.bind('enter', function() {
  var tree = Tree.focused();
  tree.toggleFold();
});
