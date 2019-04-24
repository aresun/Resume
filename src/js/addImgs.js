import emailImg from '../img/email.png';
import homeImg from '../img/home.png';
import phoneImg from '../img/phone.png';
import birthImg from '../img/birth.png';
import universityImg from '../img/university.png';
import diplomaImg from '../img/diploma.png';

const imgs = [
    emailImg,
    homeImg,
    phoneImg,
    birthImg,
    universityImg,
    diplomaImg
];
/**
 * @param {dom} d dom, target
 * @param {img} i image
 */
function appendPic(d, i) {
    let dom = document.createElement('img');
    dom.src = i;
    d.appendChild(dom);
}
/**
 * @description add all images to li's back
 */
function addImgs() {
    let sources = document.getElementById('brief').getElementsByClassName('right')[0].getElementsByTagName('li');
    let len = sources.length;
    let i = 0;
    for (; i !== len; i++) {
        appendPic(sources[i], imgs[i]); // one li, one image
    }
}
export default addImgs;