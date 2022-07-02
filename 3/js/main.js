const getRandomPositiveInteger = (a,b) =>{
  const lower = Math.ceil(Math.min(Math.abs(a),Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const maxValue = 25;
const maxAvatarValue = 6;
const minLikes = 15;
const maxLikes = 250;
const maxComments = 6;
const allId = [];
const allUrls = [];
const allAvatars = [];
const allComments = [];
for(let i = 1; i<=maxValue; i++){
  allId.push(i);
  allUrls.push( `photos/${i+1}.jpg`);
}
for(let i = 0; i<=maxAvatarValue;i++){
  allAvatars.push( `avatar-${i+1}.jpg`);
}
const allDescriptions = [
  'Осень' ,
  'Поездка в даль' ,
  'Лучшие моменты в моей жизни' ,
  'Унылая пора',
  'Тёплые денёчки' ,
  'Опять поезда'
];
const allNames = [
  'Алексей' ,
  'Владимир',
  'Сергей' ,
  'Георгий' ,
  'Ирина' ,
  'Вероника'
];
const allMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Всё круто',
];

const getRandomArrayElement = (elements) => elements [getRandomPositiveInteger(0, elements.length - 1)];
/*const COMMENTS = [
  {
    id:getRandomArrayElement(ID),
    avatar:getRandomArrayElement(AVATARS),
    message:getRandomArrayElement(MESSAGES),
    name:getRandomArrayElement(NAMES)
  }
];*/
for (let i = 1;i <= maxComments; i++)
{
  allComments[i] = {id:getRandomArrayElement( allId),
    avatar:getRandomArrayElement(allAvatars),
    message:getRandomArrayElement(allMessages),
    name:getRandomArrayElement(allNames)
  };
}
const createReview = () => ({
  id:getRandomArrayElement( allId),
  url:getRandomArrayElement(allUrls),
  description : getRandomArrayElement(allDescriptions),
  likes: getRandomPositiveInteger (minLikes,maxLikes),
  comments: getRandomArrayElement(allComments)
});
// eslint-disable-next-line no-unused-vars
const allPosts = Array.from({length:10},createReview);


