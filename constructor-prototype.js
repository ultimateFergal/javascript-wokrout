//CONSTRUCTOR FUNCTION to instantiate classes with attributes

function User(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
};

var user1 = new User('john', 'smith', 26, 'male');

console.log(user1);
// {
//     "firstName": "john",
//     "lastName": "smith",
//     "age": 26,
//     "gender": "male"
// }

var user200 = new User('JIll', 'robinson', 25, 'female');

console.log(user200);
// {
//     "firstName": "JIll",
//     "lastName": "robinson",
//     "age": 25,
//     "gender": "female"
// }

// **********************************************
// PROTOTYPE OBJECT
//An object that multiple other ovbjects can refer to get any information or 
//functionality that they need
// for constructor functions to have a property that is the same for all of 
// the instances
User.prototype.emailDomain = '@facebook.com';
// Object with dunder proto
console.log(user1);

user200.emailDomain
// @facebook.com

User.prototype.getEmailAddress = function () {
    return this.firstName + this.lastName + this.emailDomain;
}

console.log(user1)
// getEmailAddress in dunder proto

console.log(user200.getEmailAddress());
// 'JIllrobinson@facebook.com'

console.log(user200.getEmailAddress());
// 'johnsmith@facebook.com'