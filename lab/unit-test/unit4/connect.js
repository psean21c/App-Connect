function ConnectSummary(items) {
	this._items = items;
}

ConnectSummary.prototype.getText = function() {
	return "text"
};

ConnectSummary.prototype.getSubtotal = function() {
	// console.log(this._items.length);
	if (this._items.length) {
		return this._items.reduce(function(subtotal, item) {
			return subtotal += (item.quantity * item.price);
		}, 0);
	}
	return 0;
};

module.exports = ConnectSummary;