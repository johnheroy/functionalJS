// Question 1
var milks = ['skim', '1%', '2%', 'whole'];
_.each(milks, function(milk, index) {
  console.log('milk type', milk);
  console.log('index', index);
});


// Question 2
var checkValue = function(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true;
    }
  }
  return false;
};
// console.log(checkValue([1, 2, 3], 3));


// Question 3
var checkValueUnderscore = function(arr, val) {
  var found = false;
  _.each(arr, function(item) {
    if (item === val) {
      found = true;
    }
  });
  return found;
};
// console.log(checkValueUnderscore([1, 2, 3], 3));


// Question 4
var objectValuesToArray = function(obj) {
  var arr = [];
  for (var key in obj) {
    arr.push(obj[key]);
  }
  return arr;
};
console.log(objectValuesToArray({two: 2, four: 4, three: 3, twelve: 12}));


// Question 5
var mapObjectValuesToArray = function(obj) {
  return _.map(obj, function(item) {
    return item;
  });
};
console.log(mapObjectValuesToArray({two: 2, four: 4, three: 3, twelve: 12}));


// Question 6
var filterEvenNumbers = function(arr) {
  return _.filter(arr, function(item) {
    return item % 2 === 0;
  });
};
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7]));