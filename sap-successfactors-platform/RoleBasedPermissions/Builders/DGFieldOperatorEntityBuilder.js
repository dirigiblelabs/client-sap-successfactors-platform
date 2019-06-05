var method = DGFieldOperatorEntityBuilder.prototype;

function DGFieldOperatorEntityBuilder() {

}

method.label = function(label) {
	this.label = label;
	return this;
};

method.token = function(token) {
	this.token = token;
	return this;
};

method.build = function() {
	return {
		label: this.label,
		token: this.token
	};
};

module.exports = DGFieldOperatorEntityBuilder;
