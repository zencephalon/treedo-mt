Template.focus.helpers({
  text_settings: function() {
    return AutocompleteHelper.settings_maker(AutocompleteHelper.text_callback);
  },
  parent_settings: function() {
    return AutocompleteHelper.settings_maker(AutocompleteHelper.parent_callback);
  },
  initial_value: function () {
    tree = Tree.focused();
    return tree.text;
  },
  parent_value: function() {
    tree = Tree.focused();
    return "@(" + Tree.findOne(tree.parent).ref + ")";
  },
  root: function() {
    tree = Tree.focused();
    return tree.root;
  },
  val: function() {
    return Tree.focused().val;
  },
  complete_text: function() {
    tree = Tree.focused();
    return (tree.archived) ? "Unarchive" : "Archive"
  }
});

Template.focus.rendered = function() {
  $('#rename-form').find('input').autosizeInput();
  setTimeout(function() {$('#rename-form').find('input').change()}, 500);
}

Template.focus.events({
  'click #complete-btn': function(event) {
    Tree.focused().toggleArchive();
  },
  'submit': function(event) {
    event.preventDefault();
    tree = Tree.focused();
    tree.updateText($(event.target).find('input[name=text]').val(), true);
    tree.updateVal($(event.target).find('input[name=val]').val(), true);
    $(event.target).find('input').blur();
    return false;
  }
})

