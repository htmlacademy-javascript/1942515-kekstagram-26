import './data.js';
import { allPosts } from './data.js';

const ALLINFO = document.querySelector('#picture').content.querySelector('.picture');
const PICTURECONTAINER   = document.querySelector('.pictures');
const PICLISTFRAGMENT = document.createDocumentFragment();


allPosts.forEach((picture) => {
  const actualInfo = ALLINFO.cloneNode(true);
  actualInfo.querySelector('.picture__img').src= picture.url;
  PICLISTFRAGMENT.appendChild(actualInfo);
});
PICTURECONTAINER.append(PICLISTFRAGMENT);


