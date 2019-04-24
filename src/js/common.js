function l(...args) {
    console.log.apply(console, args);
}
function randomInt(start, range) {
    let result = start + Math.floor(Math.random() * (range + 1));
    return result;
}
/*  */
function getStyle(element, attr) {
    if (element.currentStyle) {
        return element.currentStyle[attr];
    } else {
        // 2rd arg: 伪元素字符串（例如“:after”）
        return getComputedStyle(element, null)[attr];
    }
}
function createDomWithText(tagName, text) {
    let result = document.createElement(tagName);
    result.textContent = text;
    return result;
}
export { l, randomInt, getStyle, createDomWithText };