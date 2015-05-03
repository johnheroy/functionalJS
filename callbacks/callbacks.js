// Question 1
var funcCaller = function(func, arg) {
  return func(arg);
};
//funcCaller(alert, 'yolo');


// Question 2
var firstVal = function(arr, func) {
  func(arr[0], 0, arr); // same signature as underscore.js callbacks
};
firstVal([1, 2, 3], function(item, index, collection) {
  console.log(item);
});


// Question 3
var someVal = function(obj, func) {
  var keys = Object.keys(obj);
  func(obj[keys[0]], keys[0], obj);
};
someVal({a: 1, b: 2, c: 3}, function(item, key, collection) {
  console.log(item);
});


// Question 4
var once = function(func) {
  var called = false;
  return function() {
    if (!called) {
      called = true;
      return func();
    }
  };
};
var alertYolo = function() {
  alert('yolo');
};
var alertYoloOnce = once(alertYolo);
alertYoloOnce();
alertYoloOnce();