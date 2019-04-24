import { briefIntro } from "./data";
import { briefDescriptionListContainer } from "./const";
import { createDomWithText } from "./common";

function appendBriefs() {
  let target = briefDescriptionListContainer;
  let dom;
  let frag = document.createDocumentFragment();

  for (let brief of briefIntro) {
    dom = createDomWithText("li", brief);
    frag.appendChild(dom);
  }
  target.appendChild(frag);
}
export default appendBriefs;
