import { university } from './data';
import { education as targetContainer } from './const';
import { createDomWithText } from './common';

export function appendEduInfo() {
    let containerDom = document.createElement('div');
    containerDom.classList.add('university');

    containerDom.appendChild(createDomWithText('h5', university.major));
    containerDom.appendChild(createDomWithText('h5', university.university));
    containerDom.appendChild(createDomWithText('p', university.time));

    targetContainer.appendChild(containerDom);
}