const svgHighlight = require('../index')

const svgDOM = `
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
 <g>
  <rect id="item_1" height="20" width="100" y="0" x="0"/>
  <rect id="item_2" height="20" width="100" y="20" x="0"/>
  <rect id="item_3" height="20" width="100" y="40" x="0"/>
  <rect id="item_4" height="20" width="100" y="60" x="0"/>
  <rect id="item_5" height="20" width="100" y="80" x="0"/>
 </g>
</svg>
`

describe('options', () => {
  it('should place the element at the last position inside its parent', () => {
    document.body.innerHTML = svgDOM
    const element = document.querySelector('#item_2')
    svgHighlight(element)
    expect(element.nextElementSibling).toBeNull()
  })
  it('should only apply class on highlighted element', () => {
    document.body.innerHTML = svgDOM
    const element = document.querySelector('#item_2')
    const otherElement = document.querySelector('#item_1')
    otherElement.classList.add('svg-highlight')
    svgHighlight(element)
    expect(otherElement.classList.contains('svg-highlight')).not.toBe(true)
    expect(element.classList.contains('svg-highlight')).toBe(true)
    svgHighlight(otherElement)
    expect(otherElement.classList.contains('svg-highlight')).toBe(true)
    expect(element.classList.contains('svg-highlight')).not.toBe(true)
  })
  describe('customClass', () => {
    it('should add default class on element if customClass not specified', () => {
      document.body.innerHTML = svgDOM
      const element = document.querySelector('#item_2')
      svgHighlight(element)
      expect(element.classList.contains('svg-highlight')).toBe(true)
    })
    it('should add default class on element if customClass not specified', () => {
      document.body.innerHTML = svgDOM
      const element = document.querySelector('#item_2')
      svgHighlight(element, {
        customClass: 'custom-class'
      })
      expect(element.classList.contains('custom-class')).toBe(true)
    })
  })
})
