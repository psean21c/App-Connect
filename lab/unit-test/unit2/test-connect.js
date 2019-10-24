/**
todo: 
- figure out why TypeError happened => use camelCase in connectSummary
- import chai + connect, then cover the method(getText) of Connect Object 
run: mocha test-connect.js --watch
 */

//const {expect, assert} = require('chai');
var ConnectSummary = require('./connect');

describe('unit-test-Summary', function () {

	var connectSummary = new ConnectSummary();
	// var ConnectSummary = new ConnectSummary(); // TypeError: ConnectSummary is not a constructor
	beforeEach('beforeEach(1)', function () {
		// console.log('before:')
	});

	it('main-test-1', function () {
		// console.log('it:')
	})

});