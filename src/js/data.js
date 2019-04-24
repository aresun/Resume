let briefIntro = [
  "对待工作认真，负责",
  "通过研究问题细节，查阅中英文文档，为程序提供解决方案，调试BUG",
  "乐于总结和整理技术文档，学习最新前端技术",
  "对编程与设计有浓厚的兴趣"
];

let skills = [
  {
    name: "HTML5",
    description: "熟悉 HTML5"
  },
  {
    name: "CSS3",
    description: "熟悉 CSS3"
  },
  {
    name: "SCSS",
    description: "熟悉 SCSS 语法, 生成样式"
  },
  {
    name: "JavaScript",
    description: "熟悉 JavaScript 原生开发"
  },
  {
    name: "ES6",
    description: "掌握 JavaScript ES6 常用语法"
  },
  {
    name: "jQuery",
    description: "熟悉 jQuery 框架"
  },
  {
    name: "React",
    description: "熟悉 React 技术栈; React  redux; React router;"
  },
  {
    name: "Webpack",
    description: "熟悉 webpack 打包工具使用与配置"
  },
  {
    name: "git",
    description: "熟悉 git 命令行版本控制工具"
  },
  {
    name: "Photoshop",
    description: "熟悉 Photoshop 修图, 切图"
  }
];

let workExperiences = [
  {
    title: "奶茶店服务员",
    corpration: "Coco 都可",
    time: "10/2018 - 04/2019",
    address: "长沙",
    descriptions: [
      "负责奶茶店后区物料，用茶煮制;",
      "前区饮品雪克制作, 前区顾客点单;",
      "店面卫生等事务;"
    ]
  },
  {
    title: "操作工",
    corpration: "湖南红太阳光电科技有限公司",
    time: "11/2015 - 08/2018",
    address: "长沙",
    descriptions: [
      "负责铸锭生产设备的检查，保证设备无故障安全生产;",
      "记录分析工控设备实时数据;",
      "执行铸锭关键步骤如融化测试，融化跳步，冷却出硅锭，长晶跳步;"
    ]
  }
];

let university = {
  major: "计算机科学与技术专业",
  university: "湖南农业大学东方科技学院",
  time: "09/2009 - 06/2013"
};

let projects = [
  {
    name: "Resume",
    techs: [
      "原生 JavaScript",
      "ES6 语法",
      "CSS3",
      "SCSS/SASS",
      "HTML5",
      "DIV+CSS",
      "Webpack",
      "Git"
    ],
    descriptions: [
      "使用 GitHub 托管页面",
      "完成 Resume 页面整体设计",
      "使用原生 JavaScript 编写页面字幕互动效果,内容添加等"
    ]
  },
  {
    name: "Origintodo",
    techs: [
      "ES6 语法",
      "React",
      "React router",
      "React redux",
      "SCSS/SASS",
      "Webpack",
      "Git"
    ],
    descriptions: [
      "这是一个MVC todo list 应用",
      "使用 GitHub 托管页面",
      "完成 Origintodo 页面整体设计与布局",
      "使用 React 技术栈构建单页应用",
      "分别使用 React router & React redux 实现了页面路由，状态管理",
      "实现了添加标签，删除，分类，完成等功能"
    ]
  }
];
export { briefIntro, skills, workExperiences, university, projects };
