// "use strict";

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
// const account1 = {
//   owner: "Jonas Schmedtmann",
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: "Jessica Davis",
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: "Steven Thomas Williams",
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: "Sarah Smith",
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector(".welcome");
// const labelDate = document.querySelector(".date");
// const labelBalance = document.querySelector(".balance__value");
// const labelSumIn = document.querySelector(".summary__value--in");
// const labelSumOut = document.querySelector(".summary__value--out");
// const labelSumInterest = document.querySelector(".summary__value--interest");
// const labelTimer = document.querySelector(".timer");

// const containerApp = document.querySelector(".app");
// const containerMovements = document.querySelector(".movements");

// const btnLogin = document.querySelector(".login__btn");
// const btnTransfer = document.querySelector(".form__btn--transfer");
// const btnLoan = document.querySelector(".form__btn--loan");
// const btnClose = document.querySelector(".form__btn--close");
// const btnSort = document.querySelector(".btn--sort");

// const inputLoginUsername = document.querySelector(".login__input--user");
// const inputLoginPin = document.querySelector(".login__input--pin");
// const inputTransferTo = document.querySelector(".form__input--to");
// const inputTransferAmount = document.querySelector(".form__input--amount");
// const inputLoanAmount = document.querySelector(".form__input--loan-amount");
// const inputCloseUsername = document.querySelector(".form__input--user");
// const inputClosePin = document.querySelector(".form__input--pin");

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////
// let arr = ["a", "b", "c", "d", "e"];
// console.log("slice");
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(4));
// console.log(arr.slice(-4, -1));

// console.log(
//   "splice method is different from slice splice method updates the array and slice method dosen't updates the array as we can see in below examples"
// );
// console.log([...arr]);
// console.log(...arr);

// console.log(arr.splice(2));
// console.log(
//   "as we can see splice deletes the extracted elemnst from the array"
// );
// console.log(arr);

// console.log("reverse method");
// const arr1 = ["h", "s", "r", "a", "h"];
// console.log(arr1);

// arr1.reverse();
// console.log("even reverse method mutates the array ");
// console.log("mutates means changing into new form");
// console.log(arr1);

// console.log("concat method is adding up two arrays");

// const arr2 = ["r", "a", "v", "a", "l"];
// console.log(arr1.concat(arr2));
// console.log([arr1], [arr2]);

// console.log(
//   "join method is used to join array with some input or seperator given with the join method"
// );

// console.log(arr1.join(""));
// console.log(arr2.join(""));
// console.log(arr1.join(""), arr2.join(""));
// console.log(arr1.join("-"));
// console.log(arr2.join("-"));

// const arr3 = [11, 45, 76, 23, 89, 56, 35];
// console.log(arr3[3]);
// console.log(arr3.at(3));

// // last element

// console.log(arr3[arr3.length - 1]);
// console.log(arr3.slice(-1)[0]);

// console.log(arr3.at(-1));

// console.log("Movements");

// console.log(
//   "there are 2 parameters in the forof loop first is current index, second is currrent element"
// );
// for (const [i, move] of movements.entries()) {
//   if (move > 0) {
//     console.log(`movement number ${i + 1}: You depoited : ${move}`);
//   } else {
//     console.log(`movement number ${i + 1}: You withdrew ${Math.abs(move)}`);
//   }
// }

// console.log("*******FOREACH******");
// console.log(
//   "there are 3 parameters in the foreach loop first is currrent element,second is current index,and third is the whole array on whic we are applying the foreach loop "
// );
// movements.forEach(function (move, i, arr) {
//   if (move > 0) {
//     console.log(`movement number ${i + 1}: You depoited : ${move}`);
//   } else {
//     console.log(`movement number ${i + 1}: You withdrew ${Math.abs(move)}`);
//   }
// });

// console.log(
//   "the fundamental diff between the forof loop and foreach is we cannot break and continue in the foreach loop cuz always loop on the entire array"
// );

// currencies.forEach(function (val, key, map) {
//   console.log(`${key} : ${val}`);
// });

// //set

// const currenciesUnique = new Set([
//   "USD",
//   "EURO",
//   "DHIRAM",
//   "RS",
//   "POUNDS",
//   "USD",
//   "RS",
// ]);
// console.log(currenciesUnique);
// //parameters with only underscore is completely unneceassary parameter
// currenciesUnique.forEach(function (val, _, set) {
//   console.log(`${val} : ${val}`);
// });

// //js pin 1111
// //jd pin 2222
// const newbox = [1, 2, 3, 4, 5];
// console.log(typeof newbox);

// //dom manipulation
// const displayMovements = function (movements) {
//   //the below line is used for clearing all the history data in the conatinermovements
//   containerMovements.innerHTML = "";
//   movements.forEach(function (mov, i) {
//     const type = mov > 0 ? "deposit" : "withdrawal";
//     const html = `
//         <div class="movements__row">
//                 <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//                 <div class="movements__value">${mov}€</div>
//         </div>
//         `;
//     containerMovements.insertAdjacentHTML("afterbegin", html);
//   });
// };
// displayMovements(account1.movements);

// // Coding Challenge #1

// /*
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliacorrected = dogsJulia.slice();
//   dogsJuliacorrected.splice(0, 1);
//   dogsJuliacorrected.splice(2, 4);
//   // concate reducing lines of codes
//   // const dogs = dogsJuliacorrected.concat(dogsKate)
//   dogsJuliacorrected.forEach(function (age, num) {
//     if (age > 3 || age == 3) {
//       console.log(`Dog number ${num + 1} is an adult, and is ${age} years old`);
//     } else {
//       console.log(`Dog number ${num + 1} is still a puppy 🐶`);
//     }
//   });

//   dogsKate.forEach(function (age, num) {
//     if (age > 3 || age == 3) {
//       console.log(`Dog number ${num + 1} is an adult, and is ${age} years old`);
//     } else {
//       console.log(`Dog number ${num + 1} is still a puppy 🐶`);
//     }
//   });
// };
// // const dogsJulia = [3, 5, 2, 12, 7];
// // const dogsKate = [4, 1, 15, 8, 3];

// // console.log(dogsJulia.splice(0, 1));
// // console.log(dogsJulia.splice(2, 4));

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// //map is same as the forEach loop but it creates a brand new array
// //filter is used to filter the array
// //reduce is used to reduce the elements of the array like a snowball rolling down the hill the snowball becomes larger and larger

// //map

// const euroToUsd = 1.1;
// // const movementUsd = movements.map(function (mov) {
// //   return Math.floor(mov * euroToUsd);
// // });

// const movementUsd = movements.map((mov) => Math.floor(mov * euroToUsd));

// console.log(movements);
// console.log(movementUsd);

// const movementsUsdfor = [];
// for (const mov of movements) {
//   movementsUsdfor.push(Math.floor(mov * euroToUsd));
// }
// console.log(movementsUsdfor);

// const movementsMap = movements.map(
//   (move, i, arr) =>
//     `movement number ${i + 1}: You ${
//       move > 0 ? "deposited" : "withdrew"
//     } : ${move}`

//   // if (move > 0) {
//   //   return `movement number ${i + 1}: You depoited : ${move}`;
//   // } else {
//   //   return `movement number ${i + 1}: You withdrew ${Math.abs(move)}`;
//   // }
// );
// console.log(movementsMap);

// // const user = "Harsh Suresh Raval";

// const shortusername = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(" ")
//       .map((name) => name[0])
//       .join("");
//   });
// };

// // shortusername(user);
// shortusername(accounts);
// console.log(accounts);
// // console.log(accounts.length);

// //filter
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);

// console.log(movements);

// const withdrawals = movements.filter((mov) => mov < 0);
// console.log(withdrawals);

// //reduce
// const balance = movements.reduce(function (
//   accumulator,
//   currentelement,
//   elementindex,
//   wholearray
// ) {
//   console.log(`iteration[${elementindex} : ${accumulator}]`);
//   return accumulator + currentelement;
// },
// 0);
// //other parameter is initital value for accumulator
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) {
//   balance2 = balance2 + mov;
// }
// console.log(balance2);

// const calcDisplayBalance = function (acc) {
//   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${acc.balance}€`;
// };
// // calcDisplayBalance(account1.movements);

// const maxvalue = movements.reduce(function (acc, cur) {
//   if (acc > cur) {
//     return acc;
//   } else {
//     return cur;
//   }
// }, movements[0]);
// console.log(maxvalue);

// const minvalue = movements.reduce(function (acc, cur) {
//   if (acc < cur) {
//     return acc;
//   } else {
//     return cur;
//   }
// }, movements[0]);
// console.log(minvalue);

// // Coding Challenge #2

// /*
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */

// // const ages = [5, 2, 4, 1, 15, 8, 3];

// const ages = [16, 6, 10, 5, 6, 1, 4];
// console.log(ages);

// const calcaverageHumanAge = ages.map(function (age) {
//   if (age <= 2) {
//     return age * 2;
//   } else {
//     return 16 + age * 4;
//   }
// });

// // console.log(calcaverageHumanAge);

// const above18 = calcaverageHumanAge.filter((age) => age >= 18);
// console.log(above18);

// const average = above18.reduce(function (acc, cur, i) {
//   return acc + cur / above18.length;
// }, 0);
// console.log(above18.length);
// console.log(average);

// const totaldepositsUs = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * euroToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totaldepositsUs);

// const calcdisplaysummary = function (acc) {
//   const income = acc.movements
//     .filter((mov) => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = `${income}€`;

//   const outcome = acc.movements
//     .filter((mov) => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.textContent = `${Math.abs(outcome)}€`;

//   const interest = acc.movements
//     .filter((mov) => mov > 0)
//     .map((mov) => (mov * acc.interestRate) / 100)
//     .filter((mov, i, arr) => {
//       console.log(arr);
//       return mov >= 1;
//     })
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumInterest.textContent = `${interest}€`;
// };
// // calcdisplaysummary(account1.movements);

// // Coding Challenge #3

// /*
// Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */

// // const newages = [16, 6, 10, 5, 6, 1, 4];
// // console.log(ages);

// const arrowcalcAverageHumanAge = (ages) =>
//   ages
//     .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
// // console.log(arrowcalcAverageHumanAge);
// const avg1 = arrowcalcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = arrowcalcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// //unlike filter method find method doesnt creates a new array but it returns the first element which is satisfied from the array
// //filter returns all the elements which satisfied the condition and find method returns only the first element
// const firstwithdrawal = movements.find((mov) => mov < 0);
// console.log(firstwithdrawal);
// console.log(movements);
// // console.log(accounts);

// const account = accounts.find((acc) => acc.owner == "Jessica Davis");
// console.log(account);

// const updateUI = function (acc) {
//   displayMovements(acc.movements);

//   calcDisplayBalance(acc);
//   calcdisplaysummary(acc);
// };
// //login

// let currentAccount;

// btnLogin.addEventListener("click", function (e) {
//   //prevent form from submitting bcuz the form method in the html contains the submit method after clicking tht submit button the page is reloaded as default
//   e.preventDefault();
//   currentAccount = accounts.find(
//     (acc) => acc.username === inputLoginUsername.value
//   );
//   console.log(currentAccount);

//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     console.log("login");
//     labelWelcome.textContent = `Welcome back ${
//       currentAccount.owner.split(" ")[0]
//     }`;

//     //clear input field of id and password
//     inputLoginUsername.value = inputLoginPin.value = " ";
//     // inputLoginPin.blur();
//     updateUI(currentAccount);
//     containerApp.style.opacity = 100;
//   } else {
//     console.log("invalid pin");
//   }
// });

// //transfer money
// btnTransfer.addEventListener("click", function (e) {
//   e.preventDefault();

//   const amount = Number(inputTransferAmount.value);
//   const receiveracc = accounts.find(
//     (acc) => acc.username === inputTransferTo.value
//   );

//   if (
//     amount > 0 &&
//     receiveracc &&
//     currentAccount.balance >= amount &&
//     receiveracc?.username !== currentAccount.username
//   ) {
//     currentAccount.movements.push(-amount);
//     receiveracc.movements.push(amount);

//     updateUI(currentAccount);
//   }
// });

"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: "Harsh Raval",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Raj Raval",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};
``;
const account3 = {
  owner: "Sunita Suresh",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Suresh Raval",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
/////////////////////////////////////////////////
// Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));


///////////////////////////////////////
// The new at Method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));


///////////////////////////////////////
// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...


///////////////////////////////////////
// forEach With Maps and Sets
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


///////////////////////////////////////
// The map Method
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);


///////////////////////////////////////
// The filter Method
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);


///////////////////////////////////////
// The reduce Method
console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);


///////////////////////////////////////
// The Magic of Chaining Methods
const eurToUsd = 1.1;
console.log(movements);

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// adults.length

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);


///////////////////////////////////////
// The find Method
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);


///////////////////////////////////////
// some and every
console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


///////////////////////////////////////
// flat and flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);


///////////////////////////////////////
// Sorting Arrays

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);


///////////////////////////////////////
// More Ways of Creating and Filling Arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Emprty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});
*/

///////////////////////////////////////
// Array Methods Practice

// 1.
const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// Prefixed ++ oeprator
let a = 10;
console.log(++a);
console.log(a);

// 3.
const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitzalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitzalize(word)))
    .join(" ");

  return capitzalize(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

/*
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  } `
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
// .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
// "Matilda and Alice and Bob's dogs eat too much!"
//  "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
// current > (recommended * 0.90) && current < (recommended * 1.10)
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
// sort it by recommended food portion in an ascending order [1,2,3]
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
*/

// btnClose.addEventListener("click", function (e) {
//   e.preventDefault();
//   // console.log("delete");
//   if (
//     currentAccount.username === Number(inputCloseUsername.value) &&
//     currentAccount.pin === Number(inputClosePin.value)
//   ) {
//     const index = accounts.findIndex(
//       (acc) => acc.username === currentAccount.username
//     );
//     console.log(index);
//   }
// });

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(2,1);
// console.log(numbers);
const moments = ["happy", "sad", "fear", "angry"];

//includes is used for checking equality
console.log(moments.includes("sad"));

//some method is usedd tto check whether the condition is satisfied or not
const anydepo = movements.some((mov) => mov < 0);
console.log(anydepo);
console.log(movements);

//every method is usedd tto check whether the whole array condition is satisfied or not

const checkevery4 = account4.movements.every((mov) => mov > 0);
const checkevery = account1.movements.every((mov) => mov > 0);

console.log(checkevery);
console.log(checkevery4);

//separate callback
const depo = (mov) => mov > 0;
console.log(movements.map(depo));
console.log(movements.filter(depo));

//flat method of the array is used to return the nested array elements in only one array it contains the default argument as 1 that is only 1 depth then we can write manually the depth we want so it wil return the proper output
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrdeep = [[[1, 2], 3], [[4, 5], 6], 7, 8];
console.log(arrdeep.flat(2));

const allaccountmovements = accounts.map((acc) => acc.movements);
console.log(allaccountmovements);
const allmovements = allaccountmovements.flat();
console.log(allmovements);

const overallbalance = allmovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallbalance);

//flatmap is combination of flat and map it is written same as map method
//it only goes one level deep so if there more than one depth then we have to use flat method

const overallbalanceflatmap = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallbalanceflatmap);

//sorting arrays
const owners = ["harsh", "raj", "manas", "advait"];

//sort method mutates the array means it updates the original array we can say it make the chnages in the original aray
console.log(owners.sort());
console.log(owners);
console.log(movements);
console.log(movements.sort());
//the output is not the desires output the output is just all the negative numbers first with the order like numbers starting from 1 will be first then starting with 2 will be second and so on followed by the positive numbers

// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;//obv if a is greater then the value will be in the postive
//   }
//   if (a < b) {
//     return -1;//obv if a is smaller then the value will be in the negative
//   }
// });
movements.sort((a, b) => a - b);
console.log(movements);

// movements.sort((a, b) => {
//   if (a < b) {
//     return 1;
//   }
//   if (a > b) {
//     return -1;
//   }
// });
// console.log(movements);
movements.sort((a, b) => b - a);
console.log(movements);

const oldarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));

//empty arrays plus fill method
const anarray = new Array(7);
console.log(anarray);
console.log(anarray.length);
// the above syntax for array creates and array with the length of 7 not the array with the value of seven cuz we have passed only one argument
// the first argument is the value
// the second argument is where to insert the value at which index which is also called as begin parameter
//the third argument is till which index we have to repeat this value which is also called as end parameter
// anarray.fill(1);
anarray.fill(1, 0, 5);
console.log(anarray);

oldarray.fill(22, 2 + 1, 9);
console.log(oldarray);
//array.from
//first argument is length
//second argument is the function array.from is a function
const newarray = Array.from({ length: 10 }, () => 22);
console.log(newarray);

const arrayof10 = Array.from({ length: 10 }, (cur, i) => i + 1);
console.log(arrayof10);

// const dicerolls = Array.from({length: 100} ,(cur,i)=> )

labelBalance.addEventListener("click", function () {
  const uimovements = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("€", ""))
  );
  console.log(uimovements.reduce((acc, cur) => cur + acc, 0));
});

//arrays practice methods
const totalBankDeposits = accounts
  .map((acc) => acc.movements)
  .flat()
  .filter((mov) => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalBankDeposits);

// const totaldepo = totalBankDeposits.flat().filter((mov) => mov > 0);
// console.log(totaldepo);

// const numdepo1000 = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .filter((mov) => mov > 1000);
// console.log(numdepo1000);

const numdepo1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur > 1000 ? ++count : count), 0);
console.log(numdepo1000);

let newvalue = 10;
console.log(newvalue++);

console.log(newvalue);
console.log(++newvalue);

const totalSumOfMovements = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalSumOfMovements);

const { depos, withdraws } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.depos += cur) : (sums.withdraws += cur);

      sums[cur > 0 ? "depos" : "withdraws"] += cur;
      return sums;
    },
    {
      depos: 0,
      withdraws: 0,
    }
  );
console.log(depos, withdraws);
console.log(totalSumOfMovements);

const convertToTitleCase = function (title) {
  const exceptions = ["a", "an", "and", "the", "but", "with", "in", "on", "or"];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ");

  return titleCase[0].toUpperCase() + titleCase.slice(1);
};

console.log(convertToTitleCase("a this is a title"));
console.log(convertToTitleCase("a this is a title but it is not too long"));
console.log(convertToTitleCase("AND Here is another title with an ExamPle"));

const examplestr = "this is a title";
console.log(examplestr[0]);

// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// const createUsernames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(" ")
//       .map((name) => name[0])
//       .join("");
//   });
// };
// createUsernames(accounts);
// recommendedFoodPortion
const calcfoodportion = function (dogs) {
  dogs.forEach(function (dog) {
    dog.recommendedFoodPortion = Math.trunc(dog.weight ** 0.75 * 28);
  });
};
console.log(dogs);
calcfoodportion(dogs);
// console.log(typeof dogs);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);
const sarahsdog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(sarahsdog);

let eating = [];
const dogeats = function (dog) {
  dogs.forEach(function (dog) {
    if (dog.curFood > dog.recommendedFoodPortion * 0.9) {
      eating.push();
    } else if (dog.curFood < dog.recommendedFoodPortion * 1.1) {
      eating.push("below 10 percent");
    } else {
      eating.push("okay");
    }
  });
};
dogeats(dogs);
console.log(eating);

const onedogeats = function (dog) {
  if (dog.curFood > dog.recommendedFoodPortion * 0.9) {
    console.log("Eating too much");
  } else if (dog.curFood < dog.recommendedFoodPortion * 1.1) {
    console.log("Eating too little");
  } else {
    console.log("okay");
  }
};
onedogeats(sarahsdog);
console.log((284 * 10) / 100);
console.log((133 * 10) / 100);
console.log((191 * 10) / 100);
console.log((376 * 10) / 100);

// let ownersEatTooMuch = [];
// let ownersEatTooLittle = [];

// const toFindDogEats = function (dog) {
//   dogs.forEach(function (dog) {
//     if (dog.curFood > dog.recommendedFoodPortion) {
//       ownersEatTooMuch.push(dog.owners);
//     } else {
//       ownersEatTooLittle.push(dog.owners);
//     }
//   });
// };
// toFindDogEats(dogs);
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFoodPortion)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recommendedFoodPortion)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

const astring = `${ownersEatTooMuch.join(
  " and "
)} dogs eat too much! and ${ownersEatTooLittle.join(
  " and "
)} dogs eat too little! `;
console.log(astring);
// "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFoodPortion));

const checkeating = (dog) =>
  dog.curFood > dog.recommendedFoodPortion * 0.9 &&
  dog.curFood < dog.recommendedFoodPortion * 1.1;
console.log(dogs.some((dog) => checkeating(dog)));

console.log(dogs.filter(checkeating));

const dogscopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFoodPortion - b.recommendedFoodPortion);
console.log(dogscopy);

console.log(
  dogs.sort((a, b) => a.recommendedFoodPortion - b.recommendedFoodPortion)
);
