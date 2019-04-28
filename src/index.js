import { skills } from "./js/data";

import addImgs from "./js/addImgs";
import appendBriefs from "./js/addBriefs";

import {
  appendSkills,
  addSkillsTagHoverEvent,
  aniAPI,
  startAni
} from "./js/skills";
import { addExperiences } from "./js/experiences";
import { appendEduInfo } from "./js/education";
import { addProjects } from "./js/projects";

import { addScrollToTopFeature } from "./js/scrollEvent";

import "./sass/index.scss";

/* brief section */
addImgs();
appendBriefs();

/* skills section */
appendSkills(skills);
addSkillsTagHoverEvent();
/* start skills descriptions animation */
if (aniAPI) {
  startAni();
}

/* education information */
appendEduInfo();

/* work experience */
addExperiences();

/* projects */
addProjects();

addScrollToTopFeature();
