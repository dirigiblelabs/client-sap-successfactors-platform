var method = EMEventAttributeEntityBuilder.prototype;

function EMEventAttributeEntityBuilder() {

}

method.id = function(id) {
	this.id = id;
	return this;
};

method.name = function(name) {
	this.name = name;
	return this;
};

method.value = function(value) {
	this.value = value;
	return this;
};

method.build = function() {
	return {
		id: this.id,
		name: this.name,
		value: this.value
	};
};

module.exports = EMEventAttributeEntityBuilder;
