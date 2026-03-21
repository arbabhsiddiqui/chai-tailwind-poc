const selectedClasses = document.querySelectorAll('[class*="chai-"]');

const supportedCssClassType = {
  color: "color",
  fw: "font-weight",
  bg: "background-color",
  bc: "border-color",
  bs: "border-style",
  d: "display",
  align: "align-items",
  justify: "justify-content",
  direction: "flex-direction",
  listStyle: "list-style",
  mx: "margin-inline",
};

const supportedCssClassTypeWithPx = {
  fs: "font-size",
  bw: "border-width",
  mw: "max-width",
  gap: "gap",
  radius: "border-radius",
  p: "padding",
  m: "margin",
  mx: "margin-inline",
  my: "margin-block",
  ml: "margin-inline-start",
  mr: "margin-inline-end",
  mb: "margin-block-end",
  mt: "margin-block-start",
  px: "padding-inline",
  py: "padding-block",
  pl: "padding-inline-start",
  pr: "padding-inline-end",
  pb: "padding-block-end",
  pt: "padding-block-start",
};

console.log(selectedClasses);

selectedClasses.forEach((item) => {
  // console.log(item);

  let classString = "";
  item.classList.forEach((classItem) => {
    // console.log(classItem);

    let text = classItem.split("-");

    text.shift();
    // console.log("dd", text);

    let [classKey, classValue] = text;

    console.log(classKey, classValue);

    if (Object.keys(supportedCssClassType).includes(classKey)) {
      if (classValue.includes("[")) {
        // console.log(classValue);

        classValue = classValue.slice(1, -1);
      }

      if (classValue.includes("_")) {
        classValue = classValue?.split("_").join("-");
      }

      classString += `${supportedCssClassType[classKey]}:${classValue};`;
    }

    if (Object.keys(supportedCssClassTypeWithPx).includes(classKey)) {
      classString += `${supportedCssClassTypeWithPx[classKey]}:${classValue}px;`;
    }
  });

  console.log(classString);

  item.style.cssText = classString;
});
