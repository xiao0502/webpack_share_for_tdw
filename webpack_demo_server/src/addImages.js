// file-loader url-loader  现在只用url-loader（在file-loader的基础上面封装）

let smImg = document.createElement('img');
smImg.src = require('./images/smImg.png');

let bgImg = document.createElement('img');
bgImg.src = require('./images/bgImg.jpeg');

document.getElementById('app').appendChild(smImg);
document.getElementById('app').appendChild(bgImg);