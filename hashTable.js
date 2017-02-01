// temp save: http://stackoverflow.com/questions/1208222/how-to-do-associative-array-hashing-in-javascript

// Here's a super-basic implementation of a hash table.

var hash = {};

hash['one'] = 1;
hash['two'] = 2;
hash['three'] = 3;

// this loop show the values stored

for (var key in hash) {
  // use hasOwnProperty to filter out keys from the Object.prototype
  if (hash.hasOwnProperty(key){
    console.log('key is ' + key + ', value is ' + hash[key]);
  })
}


// Below, we will create a HashTable() class that maintains an associativt
