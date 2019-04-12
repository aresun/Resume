import { l } from './js/common';
import { briefIntro } from './js/data';

import './sass/page.scss';
import emailImg from './img/email.png';
import homeImg from './img/home.png';
import phoneImg from './img/phone.png';
import birthImg from './img/birth.png';
import universityImg from './img/university.png';
import diplomaImg from './img/diploma.png';

const page = document.getElementById('page');
const imgs = [
    emailImg,
    homeImg,
    phoneImg,
    birthImg,
    universityImg,
    diplomaImg
];

function appendPic(d, i) {
    let dom = document.createElement('img');
    dom.src = i;
    d.appendChild(dom);
}

function addImgs() {
    let sources = document.getElementById('brief').getElementsByClassName('right')[0].getElementsByTagName('li');
    let len = sources.length;
    let i = 0;
    for (; i !== len; i++) {
        appendPic(sources[i], imgs[i]);
    }
}
addImgs();

function appendBriefs(d,i){
    let target = document.getElementById('brief').getElementsByClassName('left')[0].getElementsByTagName('ul')[0];
    let dom;
    let frag = document.createDocumentFragment();
    for(let brief of briefIntro){
        dom = document.createElement('li');
        dom.textContent = brief;
        dom.insertBefore(document.createElement('div'),dom.childNodes[0]);
        frag.appendChild(dom);
    }
    target.appendChild(frag);
}
appendBriefs();