const selectedClasses = document.querySelectorAll('[class*="chai-"]');

const supportedCssClassType = {
  color: "color",
  fw: "font-weight",
  bg: "background-color",
};

console.log(selectedClasses);

selectedClasses.forEach((item) => {
  console.log(item);

  let classString = "";
  item.classList.forEach((classItem) => {
    console.log(classItem);

    let text = classItem.split("-");
    console.log(text);

    let classKey = text[1];
    let classValue = text[2];

    if (Object.keys(supportedCssClassType).includes(classKey)) {
      classString += `${supportedCssClassType[classKey]}:${classValue};`;
    }
  });

  console.log(classString);

  item.style.cssText = classString;
});
