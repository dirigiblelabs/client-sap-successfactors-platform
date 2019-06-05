var method = TodoEntityBuilder.prototype;

function TodoEntityBuilder() {

}

method.categoryId = function(categoryId) {
	this.categoryId = categoryId;
	return this;
};

method.categoryLabel = function(categoryLabel) {
	this.categoryLabel = categoryLabel;
	return this;
};

method.displayOrder = function(displayOrder) {
	this.displayOrder = displayOrder;
	return this;
};

method.status = function(status) {
	this.status = status;
	return this;
};

method.build = function() {
	return {
		categoryId: this.categoryId,
		categoryLabel: this.categoryLabel,
		displayOrder: this.displayOrder,
		status: this.status
	};
};

module.exports = TodoEntityBuilder;
