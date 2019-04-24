import { experiences as expDom } from './const';
import { workExperiences as expArr } from './data';
import { l } from './common';

/* append all experiences to dom */
function addExperiences() {
    /* exp stands for one experience */
    for (let exp of expArr) {
        // container
        let expContainer = document.createElement('div');
        expContainer.classList.add('experience');

        // h5 title
        let expH5 = document.createElement('h5');
        expH5.textContent = exp.title;
        expContainer.appendChild(expH5);

        // p corpration
        let expP = document.createElement('p');
        expP.textContent = exp.corpration;
        expContainer.appendChild(expP);

        // div time & address
        let timeDiv = document.createElement('div');
        // span time
        let timeSpan = document.createElement('span');
        timeSpan.textContent = exp.time;
        // span address
        let addressSpan = document.createElement('span');
        addressSpan.textContent = exp.address;
        // timeDiv
        timeDiv.appendChild(timeSpan);
        timeDiv.appendChild(addressSpan);
        expContainer.appendChild(timeDiv);

        // ul descriptions
        let ulContainer = document.createElement('ul');
        /* add descriptions from an array */
        for (let desc of exp.descriptions) {
            let liDom = document.createElement('li');
            // stands for circle dot
            let dotDom = document.createElement('div');
            // description stays in span
            let spanDom = document.createElement('span');
            spanDom.textContent = desc;
            liDom.appendChild(dotDom);
            liDom.appendChild(spanDom);
            ulContainer.appendChild(liDom);
        }
        expContainer.appendChild(ulContainer);

        expDom.appendChild(expContainer);
        // end process one [experience]
    } /* mount data */
}

export { addExperiences }; 