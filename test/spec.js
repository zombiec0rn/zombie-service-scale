var assert  = require('assert')
var zsf     = require('@zombiec0rn/zombie-service-format')
var scale   = require('../index')

var service = zsf.random(1, {
  scale: 10
})[0]

describe('zombie scale', function() {

	it('can scale up', function() {
		var upscaled = scale.up(service)
		assert(upscaled != null)
		assert(upscaled.length == 10)
	})

	it('can scale down', function() {
		var up = scale.up(service)
		assert(up != null)
		assert(up.length == 10)
		var down = scale.down(up)
		assert(down != null)
		assert(down.length == 1)
	})

})
