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
  return ourStr.length <= maxStr.length;
} ;
strLength('ff','ssd');

const getRandomPositiveInteger = (a,b) =>{
  const lower = Math.ceil(Math.min(Math.abs(a),Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const ID = [];
const URL = [];
const AVATAR = [];
for(let i = 0; i<=25; i++){
  ID[i]=i+1;
  URL[i] = `photos/${i+1}.jpg`;
}
for(let i = 0; i<=6;i++){
  AVATAR[i] = `avatar-${i+1}.jpg`;
}
const DESCRIPTION = [
  'Осень' ,
  'Поездка в даль' ,
  'Лучшие моменты в моей жизни' ,
  'Унылая пора',
  'Тёплые денёчки' ,
  'Опять поезда'
];
const NAME = [
  'Алексей' ,
  'Владимир',
  'Сергей' ,
  'Георгий' ,
  'Ирина' ,
  'Вероника'
];
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Всё круто',
];

const getRandomArrayElement = (elements) => elements [getRandomPositiveInteger(0, elements.length - 1)];

const createReview = () => ({
  id:getRandomArrayElement(ID),
  url:getRandomArrayElement(URL),
  description : getRandomArrayElement(DESCRIPTION),
  likes: getRandomPositiveInteger (15,250),
  comments : [
    {id:getRandomArrayElement(ID),
      message:getRandomArrayElement(MESSAGE),
      avatar:getRandomArrayElement(AVATAR),
      name:getRandomArrayElement(NAME)
    }]
});
// eslint-disable-next-line no-unused-vars
const COMMENTARIES=Array.from({length:10},createReview);


