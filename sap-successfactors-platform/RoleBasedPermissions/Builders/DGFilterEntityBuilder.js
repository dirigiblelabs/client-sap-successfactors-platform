var method = DGFilterEntityBuilder.prototype;

function DGFilterEntityBuilder() {

}

method.filterId = function(filterId) {
	this.filterId = filterId;
	return this;
};

method.expressions = function(expressions) {
	this.expressions = expressions;
	return this;
};

method.field = function(field) {
	this.field = field;
	return this;
};

method.build = function() {
	return {
		filterId: this.filterId,
		expressions: this.expressions,
		field: this.field
	};
};

module.exports = DGFilterEntityBuilder;
