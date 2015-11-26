# deku-component-mount [![Build Status](https://travis-ci.org/kvnneff/deku-component-mount.svg?branch=master)](https://travis-ci.org/kvnneff/deku-component-mount)

Mount a [Deku](https://github.com/dekujs/deku) component to the DOM to facilitate testing.

Code is originally by [Dominic Barnes](https://github.com/dominicbarnes/).

## Install

`npm install deku-component-mount`

## Example

```js
import assert from 'assert'
import mount from 'deku-component-mount'
import element from 'virtual-element'
import Mock from 'component-mock'

const Component = {
  render: function () {
    return element('div', {id: 'hello-world'}, 'Hello World!')
  }
}

const node = Mock(Component).render()
const mountedNode = mount(node)

assert(document.getElementById('hello-world')) //=> passes

mountedNode.unmount()

assert(document.getElementById('hello-world')) //=> fails
```

## API

### mount(node)

Mount a Deku node to the DOM and return an object with a property `element` containing a reference to the rendered DOM element and a property `unmount` containing a function to remove the rendered DOM element from the DOM.

### mountedNode.unmount()

Remove the rendered element from the DOM

### mountedNode.element

A reference to the mounted dom element

## License
MIT
