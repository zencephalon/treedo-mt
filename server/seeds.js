function dropData() {
  Trees.remove({});
  Meteor.users.remove({});
}

function seedData() {
  uid = Accounts.createUser({email: "mkbunday@gmail.com", password: "zen"});
}

if (Meteor.isServer) {
  Accounts.onCreateUser(function(options, user) {
    tree = Tree.create({text: "Quests", root: true, uid: user._id, focused: true});
    user['profile'] = {};
    user['profile']['show_help'] = true;
    return user;
  });

  Meteor.startup(function () {
    Trees.update({val: {"$exists":false}}, {"$set": {val: 1}}, {multi: true});
    //dropData();
    if (Trees.find().count() == 0) {
      seedData();
    }

    Meteor.publish("trees", function() {
      return Trees.find({uid: this.userId});
    });
    Meteor.publish("tree", function(_id) {
      return Trees.find({_id: _id, uid: this.userId});
    });
  })
}
