// use expect with chai , Error: Cannot find module 'chai'
const {expect, assert} = require('chai');

var ConnectSummary = require('./connect');

describe('unit-test-Summary', function () {


	beforeEach('beforeEach(1)', function () {
		conSummary = new ConnectSummary([
			{
				id: 1,
				quantity: 4,
				price: 50
			},
			{
				id: 2,
				quantity: 2,
				price: 30
			},
			{
				id: 3,
				quantity: 1,
				price: 40
			}
		]);		
	});


	it('main-test-1 :', function() {

		expect(conSummary.getSubtotal()).to.equal(300);

	});

});