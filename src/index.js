/**
 * Highlight SVG element
 * @author Robin Simonklein <robinsimonklein.com>
 * @param {SVGElement | HTMLElement} element - SVG element to highlight
 * @param {Object} [options] - Options
 * @param {string} [options.customClass] - Custom class for highlighted element
 * @return {SVGElement}
 */
export default function svgHighlight (
  element,
  options = {
    customClass: 'svg-highlight'
  }
) {
  if (element.classList.contains(options.customClass)) return
  const parent = element.parentNode
  element.remove()
  parent.append(element)
  for (const child of parent.querySelectorAll('.' + options.customClass)) {
    child.classList.remove(options.customClass)
  }
  element.classList.add(options.customClass)
  return element
}
