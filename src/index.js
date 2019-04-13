import { l, randomInt } from './js/common';
import { briefIntro, skills } from './js/data';

import './sass/page.scss';
import emailImg from './img/email.png';
import homeImg from './img/home.png';
import phoneImg from './img/phone.png';
import birthImg from './img/birth.png';
import universityImg from './img/university.png';
import diplomaImg from './img/diploma.png';

const page = document.getElementById('page');
const skillsTagsContainer = document.getElementById('skills').getElementsByTagName('ul')[0];
const subscriptContainer = skillsTagsContainer.nextSibling;
const maxSpeed = 3;

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
        appendPic(sources[i], imgs[i]); // one li, one image
    }
}
addImgs();

function appendBriefs(b) {
    let target = document.getElementById('brief').getElementsByClassName('left')[0].getElementsByTagName('ul')[0];
    let dom;
    let frag = document.createDocumentFragment();
    for (let brief of b) {
        dom = document.createElement('li');
        dom.textContent = brief;
        dom.insertBefore(document.createElement('div'), dom.childNodes[0]);
        frag.appendChild(dom);
    }
    target.appendChild(frag);
}
appendBriefs(briefIntro);

function appendSkills(sks) {
    /* add default description(for s.description) */
    let fragForTags = document.createDocumentFragment();
    let fragForDescri = document.createDocumentFragment();
    for (let i in sks) {
        /* add all tags(for s.name) */
        let dom = document.createElement('span');
        dom.textContent = sks[i].name;
        dom.dataset.index = i;
        fragForTags.appendChild(dom);

        /* add all descriptions */
        dom = document.createElement('span');
        dom.textContent = sks[i].description;
        dom.style.position = 'absolute';
        dom.style.left = `${randomInt(0, 900)}px`;
        dom.style.top = `${randomInt(0, 80)}px`;
        dom.dataset.speed = randomInt(2, maxSpeed);
        dom.dataset.index = i;
        fragForDescri.appendChild(dom);
    }

    skillsTagsContainer.appendChild(fragForTags);
    subscriptContainer.appendChild(fragForDescri);
}
appendSkills(skills);
function addSkillsTagHoverEvent() {
    skillsTagsContainer.addEventListener('mouseover', (e) => {
        let thisDom = e.target; // e.target
        if (thisDom.nodeName === 'SPAN') {
            // target's siblings
            let targetDoms = subscriptContainer.getElementsByTagName('span');
            // target's index
            let targetIndex = parseInt(thisDom.dataset.index);
            let len = targetDoms.length;
            /* stop the target description */
            // use index to mapping to the target
            let targetDom = targetDoms[targetIndex];
            targetDom.dataset.speed = 0;
            /* set other spans' opacity */
            for (let i = 0; i !== len; i++) {
                if (i !== targetIndex) {
                    targetDoms[i].style.opacity = 0.2;
                }
            }
        }
        e.stopPropagation();
    });
    skillsTagsContainer.addEventListener('mouseout', (e) => {
        let thisDom = e.target;
        if (thisDom.nodeName === 'SPAN') {
            let targetDoms = subscriptContainer.getElementsByTagName('span');
            let targetIndex = thisDom.dataset.index;
            let len = targetDoms.length;
            let targetDom = targetDoms[targetIndex];
            // set target's speed
            targetDom.dataset.speed = randomInt(2, maxSpeed);
            /* recover opacity */
            for (let i = 0; i !== len; i++) {
                if(i !== targetIndex){
                    targetDoms[i].style.opacity = 1;
                }
            }
        }
        e.stopPropagation();
    });
}
addSkillsTagHoverEvent();
/* -------------text carousel------------- */
let requestAnimationFrame;
let aniMove = (timestamp) => {
    let descriArr = subscriptContainer.getElementsByTagName('span');
    let len = descriArr.length;
    let thisOne;
    let x, y;
    for (let i = 0; i !== len; i++) {
        thisOne = descriArr[i];
        [x, y] = [thisOne.style.left, thisOne.style.top];
        x = parseInt(x);
        if (x < 0) {
            x = 900;
            y = randomInt(0, 80);
            thisOne.dataset.speed = randomInt(2, maxSpeed);
        }
        thisOne.style.left = `${x - thisOne.dataset.speed}px`;
    }
};
function startAni() {
    aniMove();
    const aniID = requestAnimationFrame(startAni);
}
if (window.requestAnimationFrame) {
    requestAnimationFrame = window.requestAnimationFrame;
} else if (window.mozRequestAnimationFrame) {
    requestAnimationFrame = window.mozRequestAnimationFrame;
} else if (window.webkitRequestAnimationFrame) {
    requestAnimationFrame = window.webkitRequestAnimationFrame;
} else if (window.msRequestAnimationFrame) {
    requestAnimationFrame = window.msRequestAnimationFrame;
} else {
    l('Sorry! your browser not support this animation');
}
if (requestAnimationFrame) {
    startAni();
}
/* -------------text carousel end------------- */