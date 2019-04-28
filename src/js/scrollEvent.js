import { l } from "./common";
import { page, top } from "./const";
import { createDomWithText } from "./common";

export function addScrollToTopFeature() {
  const toTopDom = createDomWithText("div", "TOP");
  toTopDom.id = "top";
  toTopDom.onclick = e => {
    window.scrollTo(0, 0);
  };
  page.append(toTopDom);
  const top = document.getElementById("top");
  window.onscroll = e => {
    let t = document.documentElement.scrollTop || document.body.scrollTop;
    let clientHeight = document.documentElement.clientHeight;
    if (t > 100) {
      top.style.display = "block";
      top.style.top = `${t + clientHeight - 200}px`;
    } else {
      top.style.display = "none";
    }
  };
}
