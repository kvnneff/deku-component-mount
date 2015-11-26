var deku = require('deku')
var render = deku.render
var tree = deku.tree

/**
 * Mount a Deku node to the DOM and return an object with a property `element`
 * containing a reference to the rendered DOM element and a property `unmount`
 * containing a function to remove the rendered DOM element from the DOM.
 * @param  {DekuNode} node The Deku node to mount
 * @return {Object}
 */
function mount (node) {
  var element = document.createElement('div')
  document.body.appendChild(element)

  var app = tree(node)
  var renderer = render(app, element)

  return {
    element: element,
    unmount: function unmount () {
      renderer.remove()
      document.body.removeChild(element)
    }
  }
}

module.exports = mount
