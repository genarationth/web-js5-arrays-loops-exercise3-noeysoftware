//Write a JavaScript program to construct the following pattern, using a nested for loop.
for (let i = 0; i < 5; i++) {
  let k = "";

  for (let j = 0; j <= i; j++) {
    k = k + "*";
  }

  console.log(k);
}
//Write while loops to do the following:

// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.

let xValue = 2;
while (xValue > 0) {
  xValue = xValue - 0.5;
  console.log(xValue);
}

// - Print all the odd numbers between 1 - 100.
for (let i = 1; i < 100; i++) {
  if (i % 2 !== 0) console.log(i);
}

// - Write a method with a while loop to print 1 through n in square brackets.
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]

let n = 6;
let times = 1;
while (times <= n) {
  console.log("[" + times + "]");
  times = times + 1;
}

//- Write a method with a while loop that computes the sum of first n positive integers:
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190

let num = 3;
function minusone(x) {
  return x - 1;
}

let counts = 0;
let ultimatesum = 0;

while (counts < num) {
  let z = minusone(num);
  z = minusone(z);
  ultimatesum = num + z;
  counts + 1;
}

console.log(ultimatesum);

// sum = nn + (nn-1) + ((nn-1)-1) + (((nn-1)-1)-1) + ..
// () !== 0
// times(); <= nn
// ultimatesum = nn + minusone(nn) +  minusone(minusone(nn))
// console.log(ultimatesum);
