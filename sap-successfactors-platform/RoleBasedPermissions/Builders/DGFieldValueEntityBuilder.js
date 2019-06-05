var method = DGFieldValueEntityBuilder.prototype;

function DGFieldValueEntityBuilder() {

}

method.fieldValue = function(fieldValue) {
	this.fieldValue = fieldValue;
	return this;
};

method.build = function() {
	return {
		fieldValue: this.fieldValue
	};
};

module.exports = DGFieldValueEntityBuilder;
