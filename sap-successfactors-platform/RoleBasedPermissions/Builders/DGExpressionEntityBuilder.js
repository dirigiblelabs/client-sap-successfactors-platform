var method = DGExpressionEntityBuilder.prototype;

function DGExpressionEntityBuilder() {

}

method.expressionID = function(expressionID) {
	this.expressionID = expressionID;
	return this;
};

method.operator = function(operator) {
	this.operator = operator;
	return this;
};

method.values = function(values) {
	this.values = values;
	return this;
};

method.build = function() {
	return {
		expressionID: this.expressionID,
		operator: this.operator,
		values: this.values
	};
};

module.exports = DGExpressionEntityBuilder;
