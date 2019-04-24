import { randomInt } from "./common";
import { MAXSPEED, skillsTagsContainer, subscriptContainer } from "./const";

function appendSkills(sks) {
  /* add default description(for s.description) */
  let fragForTags = document.createDocumentFragment();
  let fragForDescri = document.createDocumentFragment();

  for (let i in sks) {
    /* add all tags(for s.name) */
    let dom = document.createElement("span");
    dom.textContent = sks[i].name;
    dom.dataset.index = i;
    fragForTags.appendChild(dom);

    /* add all descriptions */
    dom = document.createElement("span");
    dom.textContent = sks[i].description;
    /* below set for animation */
    dom.style.position = "absolute";
    dom.style.left = `${randomInt(0, 900)}px`;
    dom.style.top = `${randomInt(0, 80)}px`;
    dom.dataset.speed = randomInt(2, MAXSPEED);
    dom.dataset.index = i;
    fragForDescri.appendChild(dom);
  }

  skillsTagsContainer.appendChild(fragForTags);
  subscriptContainer.appendChild(fragForDescri);
}

function addSkillsTagHoverEvent() {
  skillsTagsContainer.addEventListener("mouseover", e => {
    let thisDom = e.target; // e.target
    if (thisDom.nodeName === "SPAN") {
      // target's siblings
      let targetDoms = subscriptContainer.getElementsByTagName("span");
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
  skillsTagsContainer.addEventListener("mouseout", e => {
    let thisDom = e.target;
    if (thisDom.nodeName === "SPAN") {
      let targetDoms = subscriptContainer.getElementsByTagName("span");
      let targetIndex = thisDom.dataset.index;
      let len = targetDoms.length;
      let targetDom = targetDoms[targetIndex];
      // set target's speed
      targetDom.dataset.speed = randomInt(2, MAXSPEED);
      /* recover opacity */
      for (let i = 0; i !== len; i++) {
        if (i !== targetIndex) {
          targetDoms[i].style.opacity = 1;
        }
      }
    }
    e.stopPropagation();
  });
}

/* ------------- subscript flow ------------- */
let aniAPI;
if (window.requestAnimationFrame) {
  aniAPI = window.requestAnimationFrame;
} else if (window.mozRequestAnimationFrame) {
  aniAPI = window.mozRequestAnimationFrame;
} else if (window.webkitRequestAnimationFrame) {
  aniAPI = window.webkitRequestAnimationFrame;
} else if (window.msRequestAnimationFrame) {
  aniAPI = window.msRequestAnimationFrame;
} else {
  l("Sorry! your browser not support this animation");
}

let aniMove = timestamp => {
  let descriArr = subscriptContainer.getElementsByTagName("span");
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
      thisOne.dataset.speed = randomInt(2, MAXSPEED);
    }
    thisOne.style.left = `${x - thisOne.dataset.speed}px`;
  }
};

function startAni() {
  aniMove();
  aniAPI(startAni);
}
/* ------------- subscript flow end ------------- */
export { appendSkills, addSkillsTagHoverEvent, aniAPI, startAni };
