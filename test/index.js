/*global describe, it*/
var assert = require('assert')
var element = require('virtual-element')
var Mock = require('component-mock')
var mount = require('../')

var Component = {
  render: function () {
    return element('div', {id: 'hello-world'}, 'Hello World!')
  }
}

describe('mount(node)', function () {
  it('Mounts a Deku node to the DOM', function () {
    var mock = Mock(Component)
    var node = mock.render()
    var el = mount(node)
    assert(document.getElementById('hello-world'))
    el.unmount()
  })
})

describe('unmount()', function () {
  it('Removes the mounted element from the DOM', function () {
    var mock = Mock(Component)
    var node = mock.render()
    var el = mount(node)
    assert(document.getElementById('hello-world'))
    el.unmount()
    assert.equal(document.getElementById('hello-world'), null)
  })
})
