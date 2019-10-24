function ConnectSummary(items) {
	this._items = items;
}

ConnectSummary.prototype.getText = function() {
	return "text";
};

module.exports = ConnectSummary;