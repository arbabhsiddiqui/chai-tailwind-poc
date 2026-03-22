# Chai Tailwind POC

This is a Proof of Concept (POC) for a custom CSS framework inspired by Tailwind CSS, called "Chai Tailwind". It allows you to apply styles using utility classes prefixed with `chai-`, which are then parsed and applied via JavaScript.

## Features

- Utility-first CSS classes similar to Tailwind
- JavaScript-powered style application
- Supports colors, fonts, spacing, layout, and more

## Setup

1. Clone or download the project.
2. Open `index.html` in a web browser.
3. The JavaScript in `main.js` will automatically apply styles to elements with `chai-` classes.

## How to Use Each Class

The framework supports various utility classes. All classes are prefixed with `chai-`. Below is a list of supported classes, their CSS properties, and usage examples.

### Color Classes

- `chai-color-[value]`: Sets `color` to the specified value.
  - Example: `chai-color-[#ededf2]` → `color: #ededf2;`
  - Example: `chai-color-red` → `color: red;`

- `chai-bg-[value]`: Sets `background-color`.
  - Example: `chai-bg-[#07070a]` → `background-color: #07070a;`

- `chai-bc-[value]`: Sets `border-color`.
  - Example: `chai-bc-grey` → `border-color: grey;`

### Font Classes

- `chai-fw-[value]`: Sets `font-weight`.
  - Example: `chai-fw-500` → `font-weight: 500;`
  - Example: `chai-fw-700` → `font-weight: 700;`

- `chai-fs-[value]`: Sets `font-size` in pixels.
  - Example: `chai-fs-60` → `font-size: 60px;`
  - Example: `chai-fs-20` → `font-size: 20px;`

### Layout Classes

- `chai-d-[value]`: Sets `display`.
  - Example: `chai-d-flex` → `display: flex;`

- `chai-align-[value]`: Sets `align-items`.
  - Example: `chai-align-center` → `align-items: center;`
  - Example: `chai-align-start` → `align-items: start;`

- `chai-justify-[value]`: Sets `justify-content`.
  - Example: `chai-justify-space_between` → `justify-content: space-between;`

- `chai-direction-[value]`: Sets `flex-direction`.
  - Example: `chai-direction-column` → `flex-direction: column;`

- `chai-listStyle-[value]`: Sets `list-style`.
  - Example: `chai-listStyle-none` → `list-style: none;`

### Spacing Classes (in pixels)

- `chai-p-[value]`: Sets `padding` (all sides).
  - Example: `chai-p-20` → `padding: 20px;`

- `chai-m-[value]`: Sets `margin` (all sides).
  - Example: `chai-m-80` → `margin: 80px;`

- `chai-mx-[value]`: Sets `margin-inline`.
  - Example: `chai-mx-1200` → `margin-inline: 1200px;`

- `chai-my-[value]`: Sets `margin-block`.
  - Example: `chai-my-300` → `margin-block: 300px;`

- `chai-ml-[value]`: Sets `margin-inline-start`.
- `chai-mr-[value]`: Sets `margin-inline-end`.
- `chai-mb-[value]`: Sets `margin-block-end`.
- `chai-mt-[value]`: Sets `margin-block-start`.
  - Example: `chai-mt-80` → `margin-block-start: 80px;`

- `chai-px-[value]`: Sets `padding-inline`.
  - Example: `chai-px-15` → `padding-inline: 15px;`

- `chai-py-[value]`: Sets `padding-block`.
  - Example: `chai-py-10` → `padding-block: 10px;`

- `chai-pl-[value]`: Sets `padding-inline-start`.
- `chai-pr-[value]`: Sets `padding-inline-end`.
- `chai-pb-[value]`: Sets `padding-block-end`.
- `chai-pt-[value]`: Sets `padding-block-start`.

- `chai-gap-[value]`: Sets `gap`.
  - Example: `chai-gap-20` → `gap: 20px;`

### Border Classes

- `chai-bw-[value]`: Sets `border-width` in pixels.
  - Example: `chai-bw-0` → `border-width: 0px;`

- `chai-bs-[value]`: Sets `border-style`.
  - Example: `chai-bs-solid` → `border-style: solid;`

- `chai-radius-[value]`: Sets `border-radius` in pixels.
  - Example: `chai-radius-8` → `border-radius: 8px;`
  - Example: `chai-radius-30` → `border-radius: 30px;`

### Other Classes

- `chai-mw-[value]`: Sets `max-width` in pixels.
  - Example: `chai-mw-1200` → `max-width: 1200px;`

## Notes

- For color values with brackets like `[#07070a]`, the brackets are stripped.
- Underscores in values are replaced with hyphens (e.g., `space_between` becomes `space-between`).
- Values for pixel-based properties are automatically appended with `px`.
- This is a POC and may not be optimized for production use.

## Example Usage

```html
<div class="chai-bg-[#211921] chai-p-20 chai-radius-8 chai-color-[#ededf2]">
  Hello World
</div>
```

This applies: background-color: #211921; padding: 20px; border-radius: 8px; color: #ededf2;
