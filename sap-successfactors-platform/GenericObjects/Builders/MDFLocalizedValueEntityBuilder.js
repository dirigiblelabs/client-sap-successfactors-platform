var method = MDFLocalizedValueEntityBuilder.prototype;

function MDFLocalizedValueEntityBuilder() {

}

method.locale = function(locale) {
	this.locale = locale;
	return this;
};

method.value = function(value) {
	this.value = value;
	return this;
};

method.build = function() {
	return {
		locale: this.locale,
		value: this.value
	};
};

module.exports = MDFLocalizedValueEntityBuilder;
