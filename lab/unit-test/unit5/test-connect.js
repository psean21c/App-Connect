// use expect with chai , Error: Cannot find module 'chai'
const { expect, assert } = require('chai');

const logger = require('./logger');
const {Level} = logger;

describe('unit-test-Summary', function () {

	describe('Module-level features:', function () {
		// TRACE
		describe('when log level isLevel.TRACE', function () {
			it('should have a priority order lower than Level.DEBUG', function () {
				expect(Level.DEBUG.priority).to.be.lessThan(Level.INFO.priority);
			});
			it('should have outputString value of TRACE', function () {
				expect(Level.TRACE.outputString).to.equal('TRACE');
			});
		});
	});
});