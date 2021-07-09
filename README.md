# svg-highlight
![Version](https://img.shields.io/npm/v/svg-highlight)
![Issues](https://img.shields.io/github/issues/robinsimonklein/svg-highlight)
![Licence](https://img.shields.io/github/license/robinsimonklein/svg-highlight)

Since SVG uses the order of DOM elements during the drawing stage, those at the same level overlap.
svg-highlight is a small js tool to highlight an SVG element, that acts like a `z-index: +1`.
It can be used i.e. to show complete stroke of an highlighted element.

## Installation

```shell
npm install svg-highlight
```

## Usage

```javascript
import svgHighlight from "svg-highlight";

const yourSvgElement = document.querySelector('.your-svg-element');
svgHighlight(yourSvgElement);
```

### Options

- customClass
```javascript
svgHighlight(yourSvgElement, {
    customClass: 'my-highlighted-class'
})
```

## Credits

© Robin Simonklein
