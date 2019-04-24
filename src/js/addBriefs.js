function appendBriefs(b) {
    let target = document.getElementById('brief').getElementsByClassName('left')[0].getElementsByTagName('ul')[0];
    let dom;
    let frag = document.createDocumentFragment();
    for (let brief of b) {
        dom = document.createElement('li');
        dom.textContent = brief;
        // ---------------------------------------| as a dot
        dom.insertBefore(document.createElement('div'), dom.childNodes[0]);
        frag.appendChild(dom);
    }
    target.appendChild(frag);
}
export default appendBriefs;