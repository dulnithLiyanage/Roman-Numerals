const numerals = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  20: "XX",
  30: "XXX",
  40: "XL",
  50: "L",
  60: "LX",
  70: "LXX",
  80: "LXXX",
  90: "XC",
  100: "C",
  200: "CC",
  300: "CCC",
  400: "CD",
  500: "D",
  600: "DC",
  700: "DCC",
  800: "DCCC",
  900: "CM",
  1000: "M",
  2000: "MM",
  3000: "MMM",
  4000: "I&#x305;V&#x305;",
  5000: "V&#x305;",
  6000: "V&#x305;M",
  7000: "V&#x305;MM",
  8000: "V&#x305;MMM",
  9000: "I&#x305;X&#x305;",
  10000: "X&#x305;",
  20000: "X&#x305;X&#x305;",
  30000: "X&#x305;X&#x305;X&#x305;",
  40000: "X&#x305;L&#x305;",
  50000: "L&#x305;",
  60000: "L&#x305;X&#x305;",
  70000: "L&#x305;X&#x305;X&#x305;",
  80000: "L&#x305;X&#x305;X&#x305;",
  90000: "X&#x305;C&#x305;",
  100000: "C&#x305;",
  200000: "C&#x305;C&#x305;",
  300000: "C&#x305;C&#x305;C&#x305;",
  400000: "C&#x305;D&#x305;",
  500000: "D&#x305;",
  600000: "D&#x305;C&#x305;",
  700000: "D&#x305;C&#x305;C&#x305;",
  800000: "D&#x305;C&#x305;C&#x305;C&#x305;",
  900000: "C&#x305;M&#x305;",
  1000000: "M&#x305;",
  2000000: "M&#x305;M&#x305;",
  3000000: "M&#x305;M&#x305;M&#x305;",
};

let convertBtn = document.querySelector(".btn-convert");
let resetBtn = document.querySelector(".btn-reset");
let userNum = document.querySelector("#num");
let output = document.querySelector("#output");

function toRomanNumerals(num) {
  let str = num.toString();
  let arr = str.split("");
  let addZero = "";
  let romanNumArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] += addZero; //? Used to split numbers as 0,10,100,1000 etc
    addZero += "0"; //? Increases the number of 0s
    let romanNumDigits = numerals[arr[i]];
    romanNumArr.push(romanNumDigits);
  }

  romanNumArr.reverse();

  let romanNumeralsStr = "";

  for (let i in romanNumArr) {
    if (romanNumArr[i] !== undefined) {
      //? Since there is no value for "0" it returns undefined. This makes sure that undefined does not return
      romanNumeralsStr += romanNumArr[i];
    }
  }

  return romanNumeralsStr;
}

convertBtn.addEventListener("click", () => {
  output.innerHTML = toRomanNumerals(userNum.value);
});

resetBtn.addEventListener("click", () => {
  output.innerHTML = "";
});
