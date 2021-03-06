Template.focus.helpers({
  text_settings: function() {
    return AutocompleteHelper.settings_maker(AutocompleteHelper.text_callback);
  },
  parent_settings: function() {
    return AutocompleteHelper.settings_maker(AutocompleteHelper.parent_callback);
  },
  initial_value: function () {
    return Tree.focused().text;
  },
  parent_value: function() {
    return "@(" + Tree.findOne(Tree.focused().parent).ref + ")";
  },
  root: function() {
    return Tree.focused().root;
  },
  val: function() {
    return Tree.focused().val;
  },
  complete_text: function() {
    return (Tree.focused().archived) ? "Unarchive" : "Archive";
  },
  fold_text: function() {
    return (Tree.focused().folded) ? "Unfold" : "Fold";
  }
});

Template.focus.rendered = function() {
  $('#rename-form').find('input').autosizeInput();
  setTimeout(function() {$('#rename-form').find('input').change()}, 500);
}

Template.focus.events({
  'click #new-btn': TreeView.handleCreateForm,
  'click #archive-btn': function() {
    Tree.focused().toggleArchive();
  },
  'click #fold-btn': function() {
    Tree.focused().toggleFold();
  },
  'submit': function(event) {
    event.preventDefault();
    var tree = Tree.focused();
    tree.updateText($(event.target).find('input[name=text]').val(), true);
    tree.updateVal($(event.target).find('input[name=val]').val(), true);
    $(event.target).find('input').blur();
    return false;
  }
})

