// Question 1
var nonsense = function(string) {
  var blab = function() {
    alert(string);
  };
  blab();
};


// Question 2
var nonsense = function(string) {
  var blab = function() {
    alert(string);
  };
  setTimeout(blab, 2000);
};


// Question 3
var nonsense = function(string) {
  var blab = function() {
    alert(string);
  };
  return blab;
};

var blabLater      = nonsense('blob');
var blabAgainLater = nonsense('blobby');


// Question 4
// Copy code from "Question 3" into your console and manually call blabLater and blabAgainLater.


// Question 5
var lastNameTrier = function(firstName){

  var innerFunction = function(lastName) { 
    console.log(firstName, lastName);
  };
  
  return innerFunction;
};
var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
firstNameFarmer('Brown'); //logs 'Farmer Brown'


// Question 6
var storyWriter = function() {
  var story = '';
  return {
    addWords: function(newWords) {
      if (story.length > 0) { story += ' '; }
      story += newWords;
      return story;
    },
    erase: function() {
      story = '';
    }
  };
};

var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
farmLoveStory.addWords('It saw a friendly face.');
// This is an example of the module pattern because it allows you to mask state
// from the global scope to prevent interference from other code.


// Question 7
var Toaster = function(){
  //some private methods and properties
  var toasterStrength = 5;
  var toast = function() {
    setTimeout(function() {
      alert('ding!');
    }, 5000);
  };

  return {
    setToasterStrength: function(newStrength) {
      toasterStrength = newStrength;
      console.log('toaster successfully set to', toasterStrength);
    },
    startToaster: function() {
      toast();
    }
  };
};