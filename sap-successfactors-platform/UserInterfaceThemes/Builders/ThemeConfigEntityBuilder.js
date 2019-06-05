var method = ThemeConfigEntityBuilder.prototype;

function ThemeConfigEntityBuilder() {

}

method.id = function(id) {
	this.id = id;
	return this;
};

method.themeConfiguration = function(themeConfiguration) {
	this.themeConfiguration = themeConfiguration;
	return this;
};

method.build = function() {
	return {
		id: this.id,
		themeConfiguration: this.themeConfiguration
	};
};

module.exports = ThemeConfigEntityBuilder;
