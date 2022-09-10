"use script";

// --------------------------------How Passing Arguments Works: Values vs. Reference --------------------------------------------------

/*

const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 24739479284) {
    alert("Checked in");
  } else {
    alert("Wrong passport!");
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

*/

// ---------------------------- Functions accepting CallBack fucntions ------------------------------------------------------

//Example 1

/*
function firstWordUpperCase(str) {
  const [first, ...rest] = str.split(" ");
  return `${first.toUpperCase()} ${rest.join(" ")}`;
}

function transformer(str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
}

transformer("Javascript is fun! Sometimes...", firstWordUpperCase);

console.log("-------------------------EXAMPLE 2-------------------------");

//Example 2
const grades = [68, 71, 92, 50, 72];
grades.name = "Jean";

function gradeAvg(arr) {
  let sum = 0;
  for (const gradesAVG of arr) {
    sum += gradesAVG;
  }
  return sum / arr.length;
}

function passOrFail(arr, fn) {
  if (fn(arr) >= 80) {
    console.log(`Student ${arr.name} has passed the course!`);
  } else {
    console.log(`Student ${arr.name} has failed the course.`);
  }
}

passOrFail(grades, gradeAvg);

*/

// --------------------------------------------FUNCTIONS RETURNING FUNCTIONS--------------------------

/*

console.log("-----------functions returning functions-------------------");

function greet(greeting) {
  return function greetName(name) {
    console.log(`${greeting} there ${name}, how are you?`);
  };
}

greet("Hey")("Jean");

//Same thing but with an Arrow function
const greet2 = (greeting2) => {
  return function greetName2(name2) {
    console.log(`${greeting2} there ${name2}, how are you?`);
  };
};

greet2("Hello")("Jean");

*/

// ------------------------------------ The call and apply method -------------------------------

const jetblue = {
  airline: "jetblue",
  iataCode: "HM",
  bookings: [],

  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline}, flight: ${this.iataCode}${flightNum}.`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const bookFunction = jetblue.book;

jetblue.book("1234", "Jean");
console.log(jetblue);

const americanAirline = {
  airline: "American Airline",
  iataCode: "QE",
  bookings: [],
  //Instead of copying and pasting the method "book" into this airline, we will define a variable and set the method equal to that variable and use it here.
  //However, this is not good practice, so we will use the "call" method to assign this values to the "american airline" obnject
};

const frontier = {
  airline: "frontier",
  iataCode: "MY",
  bookings: [],
};

bookFunction.call(americanAirline, "1234", "Jean");
bookFunction.call(jetblue, "1234", "Kemish");
bookFunction.call(frontier, "1234", "Nub");
