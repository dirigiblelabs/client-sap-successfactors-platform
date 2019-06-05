var method = DGFieldEntityBuilder.prototype;

function DGFieldEntityBuilder() {

}

method.dataType = function(dataType) {
	this.dataType = dataType;
	return this;
};

method.label = function(label) {
	this.label = label;
	return this;
};

method.name = function(name) {
	this.name = name;
	return this;
};

method.picklistId = function(picklistId) {
	this.picklistId = picklistId;
	return this;
};

method.allowedOperators = function(allowedOperators) {
	this.allowedOperators = allowedOperators;
	return this;
};

method.build = function() {
	return {
		dataType: this.dataType,
		label: this.label,
		name: this.name,
		picklistId: this.picklistId,
		allowedOperators: this.allowedOperators
	};
};

module.exports = DGFieldEntityBuilder;
