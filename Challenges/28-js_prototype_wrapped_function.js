/* Добавьте в Function.prototype функцию wrap, которая работает согласно примеру:

function speak(name) {
   return `Hello ${name}`;
}

const newSpeak = speak.wrap((original, yourName, myName) => {
  const greeting = original(yourName);
  return `${greeting}, my name is ${myName}`;
});

newSpeak('Mary', 'Kate'); // Hello Mary, my name is Kate */

// BEGIN (write your solution here)
Function.prototype.wrap = function wrap(func) {
    return (...args) => func(this, ...args);
  };
  // END
  