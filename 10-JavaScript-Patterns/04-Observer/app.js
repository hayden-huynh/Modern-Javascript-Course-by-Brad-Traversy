function EventObserver() {
  this.listeners = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.listeners.push(fn);
    console.log(`You have subscribed callback ${fn.name} to Fire button click event`);
  },

  unsubscribe: function(fn) {
    // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers
    this.listeners = this.listeners.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You have unsubscribed callback ${fn.name} from Fire button click event`);
  },

  fire: function() {
    this.listeners.forEach(function(item) {
      item.call();
    });
  }
}

const clickOnFire = new EventObserver();

const getCurrentMilliseconds = function() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurrentSeconds = function() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
}

// ========== Same Click-on-Fire-button Event - Different callbacks ==========
// Event Listeners - Provide Milliseconds callback 
document.querySelector('.sub-ms').addEventListener('click', function() {
  clickOnFire.subscribe(getCurrentMilliseconds);
});
document.querySelector('.unsub-ms').addEventListener('click', function() {
  clickOnFire.unsubscribe(getCurrentMilliseconds);
});

// Event Listeners - Provide Seconds callback
document.querySelector('.sub-s').addEventListener('click', function() {
  clickOnFire.subscribe(getCurrentSeconds);
});
document.querySelector('.unsub-s').addEventListener('click', function() {
  clickOnFire.unsubscribe(getCurrentSeconds);
});

// Event Listener for Fire button clicks
document.querySelector('.fire').addEventListener('click', function() {
  clickOnFire.fire();
});

