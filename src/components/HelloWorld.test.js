import HelloWorld from './helloworld.js';

var assert = require('assert');
describe('HelloWorld', function() {
  describe('#sayhello()', function() {
    it('should return "helloworld"', function() {
    	var sut = new HelloWorld();
      assert.equal("helloworld", sut.sayhello());
    });
  });
});

