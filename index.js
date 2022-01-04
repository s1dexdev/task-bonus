//  Преобразование числа в массив цифр
function convertNumberToArray(number) {
  const arr = [];
  let code = number;

  while (code > 0) {
    arr.push(code % 10);

    code = parseInt(code / 10);
  }
  arr.reverse();

  return arr;
}

// Функция вычисления бонусов
const calculationOfBonuses = (promoCode) => {
  const arrayOfDigits = convertNumberToArray(promoCode);
  let pairsOfOddDigits = [];
  let sumOfEvenDigits = 0;
  let sumOfOddDigits = 0;

  let pair = [];

  arrayOfDigits.forEach((digit) => {
    if (digit % 2 !== 0) {
      pair.push(digit);
      sumOfOddDigits += digit;

      if (pair.length === 2) {
        pairsOfOddDigits.push(pair);
      }
    } else if (digit % 2 === 0) {
      sumOfEvenDigits += digit;
      pair = [];
    }
  });

  if (pairsOfOddDigits.length < 2) {
    if (sumOfEvenDigits > sumOfOddDigits) {
      return 100;
    }
     return 0;
    }
  } else {
    const arr = pairsOfOddDigits.flat();

    if (arr[0] < arr[1] && arr[arr.length - 2] < arr[arr.length - 1]) {
      return 2000;
    }
    return 1000;
    }
  }
};
