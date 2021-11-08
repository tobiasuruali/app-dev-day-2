////////////////////////////////////////////////////////////////////////////////
// Welcome to the 2nd exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// You have already learned about a few primitive types and you are ready
// to master objects and loops now. Great!

// EXERCISE 0. Definitions.
//////////////////////////

// Let's do the usual type checking with morpho for warming up.

// Objects.

morpho = {};
// An empty object.

console.log('Morpho: ' + morpho);
console.log('The type of morpho is: ' + typeof morpho);

// Objects are containers for variables indexed by a key (in other programming
// languages they may be called maps or dictionaries). They can contain
// variables of any type inside.

// A special type of object, the null object.
obj = null;
console.log(typeof null);
// Ok, this is confusing. null is an object? In fact, in JavaScript
// everything is an object behind the scenes, but this is an unfortunate
// design decision for the language. You just have to live with this quirk,
// it is not too terrible, if you know about it.

// Question. How is null different from undefined? null is an explicit value
// assigned by the programmer, undefined may just happen to be.

// EXERCISE 1. Create an object to represent a person.
//////////////////////////////////////////////////////

// a. The person is identified by two properties: name and year.
// Let's pick Brendan Eich, the creator of JavaScript. The guy who
// decided that the type of null is 'object'.
// Hint. The property name must contain the full name (Brendan Eich), and
// the property birth must contain the year in which he was born (1961).

// b. Access the properties of the person object and create a sentence of the
// type: "X was born in Y." where X is Brendan Eich and Y is 1961.

// c. Bonus exercise. Instead of saying that year of birth, you could say that
// Brendan Eich is Z years old.  


// EXERCISE 2. Add and remove properties to the person object.
//////////////////////////////////////////////////////

// Now you realize that it makes more sense to split the property 'name' into
// two: 'first' and 'last' name. Accordingly you delete the propery name.



// EXERCISE 3. Bonus. Constant objects.
///////////////////////////////////////
// This is weird, and it takes a lot of JavaScript to understand why it is so.
// Constant objects are not constant. For now, just embrace it.

const myObject = {
    a: 1,
    b: 2
};

// Can you change the properties of constant objects? Yes.
myObject.b = 3; // No error thrown.
// Can you add a new property to constant objects.
myObject.c = 4; // No error thrown.

// Can you re-assign it? No!
myObject = brendan; // it throws an error, it does not want to be brendan.

// Explanation. Objects are pointers to memory addresses. You can change
// the content of the address, but you can't change the address,
// which happens upon re-assignment.

// Great work! You finished the second exercise sheet!
// Pat yourself on the back or ask the person to your left to do it,
// if that is appropriate.


// EXERCISE 3. Create an array of persons.
//////////////////////////////////////////

// a. Create an array called persons containing three items.
// You already have Brendan, now add another two inspiring personalities.
// For example, Pablo Picasso and Napoleon Bonaparte. When are they born?

// persons = ...

// b. Count how many elements are in the array.

// EXERCISE 4. Accessing items inside arrays.
/////////////////////////////////////////////

// Access the second element of the array and create the same string as in exercise 2.b.

// Hint: arrays are 0-indexed, that is the first element has index 0,
// the second element 1, and so on.

// EXERCISE 5. Pick a random item in the array of persons.
//////////////////////////////////////////////////////////

// Repeat exercise 4, but this time you pick a random item from the array.

// Hint. Generate a random number between 0 and the total
// number of elements in the array, then "floor" it with the corresponding
// method of the Math object.

// randomNumber = ... 
console.log(persons[randomNumber]);

// EXERCISE 6. Add a new elements to the array of persons.
//////////////////////////////////////////////////////////

// You just realized that Phil Katz (born 1962) also deserves to be
// added to the list. Who is Phil Katz? This is a sad story that deserve some
// attention.

// Create a new object for Phil Katz and add it at the bottom of the array.
// Hint: There are a couple of ways of achieving this, depending to where
// you would like to add the element. For instance the method `push`
// will add at the bottom of the array.

// Verify that you added at the bottom.
console.log(persons[3]);

// EXERCISE 6. Replace an element in the array of persons.
//////////////////////////////////////////////////////////

// Maybe you hurried too much with Phil Katz. What about
// replacing him with Linus Torvalds (1969) instead?
// Hint: simply assign a new value at a given array index.

// Verify who is the bottom of the array.
console.log(persons[3]);

// EXERCISE 7. Remove elements from the array of persons.
//////////////////////////////////////////////////////////

// You decided to give a more consistent look to the persons array:
// it should be about notable figures in computer science. Hence,
// sorry Picasso and Napoleon you have to go. Remove the two objects
// containing the data about Picasso and Napoleon.
// Hint: the method `splice` modifies the original array and returns the
// removed elements.
persons.splice(1,2);

// Verify the content of the updated array.
console.log(persons);

// EXERCISE 8. Loop through the elements of an array.
/////////////////////////////////////////////////////

// "Where there is an array there is a loop" is a famous adagio. Actually,
// I just made it up, but indeed, loops are a fundamental part of
// evey computer language. Let's try them out.

// a. Loop through the elements of the persons array and print only the year
// in which the persons are born.
// Hint: use console.log to print. Use let when you define the iterating index.


// b. This time you want to create a short paragraph which verbosely
// describes the content of the person array. The final paragraph should look
// like this:
// 'There are 2 elements in the array: element 1 is Brendan Eich,
// born in 1961, element 2 is Linus Torvalds, born in 1962.'
// Hint: define a new string variable and add new text to it as
// you loop through the items in the array.
// Hint2: You will also need some if logic to correctly add or not the comma
// between the first and the second element and finishing with a dot.

// c. bonus. Can you replace the part "element 1" with "the first element" and
// "element 2" with the "second element" and so on?

// EXERCISE 9. Loop through the properties of an object.
////////////////////////////////////////////////////////

// Looping through the properties of an object is slightly different
// than looping through the items of an array, and also less reliable.
// For instance, there is no guarantee about the order in which they are
// accessed and there is even the risk to access properties that you have
// not defined yourself. What?! Argh, you did it again Brendan!
// Keep calm and use the `hasOwnProperty` method to avoid this rookie mistake.

// Pick an object from the persons array, and print all its properties
// and values. For Brendan, the result should look like:
// first: 'Brendan'
// last:  'Eich'
// year: ' 1961'
// (however the order might be different).
// Hint: in this exercise objects behave like arrays, but instead of a
// numeric index, you use the property name.


// EXERCISE 10. Bonus. Constant objects.
///////////////////////////////////////
// This is weird, and it takes a lot of JavaScript to understand why it is so.
// Constant objects are not constant. For now, just embrace it.

const myObject = {
    a: 1,
    b: 2
};

// Can you change the properties of constant objects? Yes.
myObject.b = 3; // No error thrown.
// Can you add a new property to constant objects.
myObject.c = 4; // No error thrown.

// Can you re-assign it? No!
myObject = brendan; // it throws an error, it does not want to be brendan.

// Explanation. Objects are pointers to memory addresses. You can change
// the content of the address, but you can't change the address,
// which happens upon re-assignment.

// Great work! You finished the second exercise sheet!
// Pat yourself on the back or ask the person to your left to do it,
// if that is appropriate.
