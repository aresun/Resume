import { briefIntro } from "./data";
import { briefDescriptionListContainer } from "./const";

function appendBriefs() {
  let target = briefDescriptionListContainer;
  let dom;
  let frag = document.createDocumentFragment();

  for (let brief of briefIntro) {
    dom = document.createElement("li");
    dom.textContent = brief;
    // ---------------------------------------| as a dot
    dom.insertBefore(document.createElement("div"), dom.childNodes[0]);
    frag.appendChild(dom);
  }
  target.appendChild(frag);
}
export default appendBriefs;
