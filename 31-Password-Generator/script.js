const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateElement = document.getElementById('generate');

generateElement.addEventListener('click', () => {
  const length = parseInt(lengthElement.value);
  const hasLower = lowercaseElement.checked;
  const hasUpper = uppercaseElement.checked;
  const hasNumber = numbersElement.checked;
  const hasSymbol = symbolsElement.checked;

  resultElement.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';

  const typesCount = lower + upper + number + symbol;
  const typesArray = [{ lower }, { upper }, { number }, { symbol }];
  const filterdTypes = typesArray.filter(item => Object.values(item)[0]);

  if (typesCount === 0) return '';

  for (let i = 0; i < length; i += typesCount) {
    filterdTypes.forEach(type => {
      const funcionName = Object.keys(type)[0];
      const randomFunction = randomFunctions[funcionName];
      generatedPassword += randomFunction();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

const randomFunctions = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
