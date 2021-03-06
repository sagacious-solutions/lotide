const eqArrays = require('./eqArrays');
const lotide = require('./index');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const objKeys = Object.keys(object1);

  if (objKeys.length !== Object.keys(object2).length) {
    return false;
  }

  for (let eachKey of objKeys) {
    if (object1[eachKey] !== object2[eachKey] && object1[eachKey].length === 1) {
      return false;
    } else {
      if (!eqArrays(object1[eachKey], object2[eachKey])) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;

/* Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
*/


//  const cd = { c: "1", d: ["2", 3] };
//  const dc = { d: ["2", 3], c: "1" };
//  lotide.assertEqual(eqObjects(cd, dc), true); // => true


// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false