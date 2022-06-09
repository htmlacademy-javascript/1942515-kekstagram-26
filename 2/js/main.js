const returnNumber = (firstNumber,secondNumber) => {
  if ((secondNumber - firstNumber) >= 0) {
    const randomNumb = Math.round(Math.random() * (secondNumber - firstNumber) + firstNumber);
    return randomNumb;
  }
  return(-1);
} ;
returnNumber(1,10);

const strLength = (ourStr, maxStr) =>
{  ourStr = String(ourStr);
  return ourStr.length < maxStr.length;
} ;
strLength('ff','ssd');


