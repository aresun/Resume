import { projects as projectsDom } from "./const";
import { createDomWithText, l } from "./common";
import { projects as proArr } from "./data";

function addProjects() {
  let frag = document.createDocumentFragment();

  for (let project of proArr) {
    // 单个 project 整体
    let projectContainer = document.createElement("div");
    projectContainer.classList.add("project");

    // div indicator & project name
    let titleContainer = document.createElement("div");
    // indicator
    titleContainer.appendChild(createDomWithText("span", "PROJECT"));
    // project name
    let pNameDom = createDomWithText("span", project.name);
    let pNameLinkDom = createDomWithText("a", "[\u27A5]");
    pNameLinkDom.href = `https://aresun.github.io/${project.name}/`;
    pNameLinkDom.target = "_blank";
    pNameDom.appendChild(pNameLinkDom);
    titleContainer.appendChild(pNameDom);

    // div as techs>span
    let techsContainer = document.createElement("div");
    // add all tech tags as span
    for (let tag of project.techs) {
      techsContainer.appendChild(createDomWithText("span", tag));
    }

    // div as descriptions>description
    let descriContainer = document.createElement("ul");
    for (let des of project.descriptions) {
      descriContainer.appendChild(createDomWithText("li", des));
    }

    // add to container
    projectContainer.appendChild(titleContainer);
    projectContainer.appendChild(techsContainer);
    projectContainer.appendChild(descriContainer);

    // finish this project
    frag.appendChild(projectContainer);
  }

  projectsDom.appendChild(frag);
}

export { addProjects };
