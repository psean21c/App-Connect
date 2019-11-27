// use expect with chai , Error: Cannot find module 'chai'
// 1) npm install chai --save-dev
// const expect = require('chai').expect;
const {expect, assert} = require('chai');

var ConnectSummary = require('./connect');

describe('unit-test-Summary', function () {

	var connectSummary = new ConnectSummary();

	beforeEach('beforeEach(1)', function () {
		// console.log("context=" + connectSummary.getText());
		console.log('++++++++++++++++++++++++++++++++=')
	});

	it('test 1', function () {
		const compare = connectSummary.getText();
		const expected = 'text';
		// console.log('test-1>> ' + compare + ' vs. ' + expected)
		assert.equal(compare, expected);
	})

	it('test 2', done => {

		const card_points = 20;
		expect(card_points).to.be.equal(20);
		expect(connectSummary.getText()).to.be.equal('text');

		done(); 
		// Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called;
	})

	it('test 3', () => {
		const compare = connectSummary.getA();
		
		const expected = 'value A';
		assert.equal(compare, expected);
	})

});