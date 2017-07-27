var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  },
  // This method return a list of names of a given array of ids
  returnNames : function (ids) {
    var names = [];
    for (var i = 0; i < ids.length; i++) {
      names.push(this[ids[i]].name)
    }
    return names;
  },
  // This method lists followers
  listFollowers: function (id) {
    followers = []
    for (var key in this) {
      if (typeof this[key] === 'object') {
        if (this[key].follows.indexOf(id) !== -1) followers.push(key);
      }
    }
    return followers;
  },
  // This method list everyone and for each of them, list names of who they
  // follow and who follows them
  follow: function () {
    for (var key in this) {
      if (typeof this[key] === 'object') {
        console.log(`${this[key].name}:`)
        var followers = this.listFollowers(key)
        var follows   = this[key].follows
        console.log(`Followers: ${this.returnNames(followers)}`)
        console.log(`Follows: ${this.returnNames(follows)}\n`)
      }
    }
  },
  // This method identifies who follows the most people
  followsMost : function () {
    var names   = [];
    var counter = 0;
    for (var key in this) {
      if (typeof this[key] === 'object') {
        numFollowees = this[key].follows.length
        if (numFollowees > counter) {
          counter = numFollowees
          names = [this[key].name]
        } else if (counter === numFollowees){
          names.push(this[key].name)
        }
      }
    }
    console.log(`${names} follow(s) the most people (${counter} people).`);
  },
  // This method identifies who has the most people
  mostFollowers : function () {
    var names    = [];
    var counter = 0;
    for (var key in this) {
      if (typeof this[key] === 'object') {
        numFollowers = this.listFollowers(key).length
        if (numFollowers > counter) {
          counter = numFollowers
          names = [this[key].name]
        } else if (counter === numFollowers){
          names.push(this[key].name)
        }
      }
    }
    console.log(`${names} has/have the most followers (${counter} followers).`);
  },
  // Checks if the person with follweeId checks the one with followerId
  followBack : function (followerId,followeeId) {
    return (this[followeeId].follows.indexOf(followerId) !== -1)
  },
  //
  checkFollowBacks : function () {
    var names = [];
    for (var key in this) {
      if (typeof this[key] === 'object') {
        var follows = this[key].follows
        for (var i = 0; i < follows.length; i++) {
          if (this.followBack(key,follows[i]) == false) {
            names.push(this[key].name)
            break
          }
        }
      }
    }
    console.log(`Those who follow someone that doesn't follow them back are: ${names}`);
  }

};




// List everyone and for each of them,
// list the names of who they follow and who follows them
console.log('*********************')
data.follow()


// Identify who follows the most people
console.log('*********************')
data.followsMost()


// Identify who has the most followers
console.log('*********************')
data.mostFollowers()

// Identify who has the most followers over 30


// Identify who follows the most people over 30


// List those who follow someone that doesn't follow them back
console.log('*********************')
data.checkFollowBacks()

// List everyone and their reach (sum of # of followers and # of followers of followers)




