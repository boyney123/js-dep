'use strict';

var FileHandler = require('../lib/modules/FileHandler.js')();

var path = require('path');
var filepath = path.resolve(process.cwd(), 'Test', 'TestData.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.FileHandler = function(test){

	//Test functions and whats returned?
	FileHandler.processFile(filepath);

	var deps = FileHandler.getDependencies()[0];

	test.equal(deps.dependencies.length, 3);

    test.done();
};
