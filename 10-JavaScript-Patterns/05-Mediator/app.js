// Users are Colleagues
const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

// Chatroom is the Mediator - The object that facilittates the exchanges between the User objects
const Chatroom = function() {
  let users = {}; // list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if (to) {
        // send to a single user
        to.receive(message, from);
      } else {
        // broadcast to the whole chatroom
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  }
}

const brad = new User('Brad');
const jeff = new User('Jeff');
const sarah = new User('Sarah');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sarah);

brad.send('Hello Jeff', jeff);
sarah.send('Hello Brad', brad);
jeff.send('Hello Everyone');