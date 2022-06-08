const returnNumber = function(firstNumber,secondNumber) {
  if ((secondNumber-firstNumber)>=0){
    const randomNumb = Math.round(Math.random()*(secondNumber-firstNumber)+firstNumber);
    return randomNumb;
  }else{
    return('Ошибка! Первое число должно быть меньше второго!');
  }
};
returnNumber(1,10);

const strLength = function(ourStr,maxStr){
  if(ourStr.length>maxStr.length){
    return ('Длина строки превышает максимально допустимую');
  }
};
strLength('','');


