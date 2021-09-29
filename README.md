# svg-highlight
![Build](https://img.shields.io/github/workflow/status/robinsimonklein/svg-highlight/Quality)
[![Version](https://img.shields.io/npm/v/svg-highlight)](https://www.npmjs.com/package/svg-highlight)
[![Size](https://img.shields.io/bundlephobia/min/svg-highlight)](https://bundlephobia.com/package/svg-highlight)
[![Issues](https://img.shields.io/github/issues/robinsimonklein/svg-highlight)](https://github.com/robinsimonklein/svg-highlight/issues)
[![Licence](https://img.shields.io/github/license/robinsimonklein/svg-highlight)](https://github.com/robinsimonklein/svg-highlight/blob/main/LICENSE)

A tiny js tool to highlight an SVG element, that acts like a `z-index: +1`.

**Why ?**<br>
Since SVG uses the order of DOM elements during the drawing stage, those at the same level overlap. 
It can be used i.e. to show complete stroke of an highlighted element.

## ⚙️ Installation
Using npm :
```shell
npm install svg-highlight
```
Using yarn :
```shell
yarn add svg-highlight
```

## ✨ Usage

```javascript
import svgHighlight from "svg-highlight";

const yourSvgElement = document.querySelector('.your-svg-element');
svgHighlight(yourSvgElement);
```

### Options
You can pass some options for advanced usage :
```javascript
svgHighlight(yourSvgElement, {
    // The class you want to use on the highlighted element.
    customClass: 'your-highlighted-class' // default: 'svg-highlight'
})
```

## 👨‍💻 Credits

[Robin Simonklein](https://robinsimonklein.com)
