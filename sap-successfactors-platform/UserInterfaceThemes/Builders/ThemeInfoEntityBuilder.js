var method = ThemeInfoEntityBuilder.prototype;

function ThemeInfoEntityBuilder() {

}

method.fingerprints = function(fingerprints) {
	this.fingerprints = fingerprints;
	return this;
};

method.id = function(id) {
	this.id = id;
	return this;
};

method.lastModifiedDate = function(lastModifiedDate) {
	this.lastModifiedDate = lastModifiedDate;
	return this;
};

method.locale = function(locale) {
	this.locale = locale;
	return this;
};

method.modules = function(modules) {
	this.modules = modules;
	return this;
};

method.ui5Theme = function(ui5Theme) {
	this.ui5Theme = ui5Theme;
	return this;
};

method.urls = function(urls) {
	this.urls = urls;
	return this;
};

method.build = function() {
	return {
		fingerprints: this.fingerprints,
		id: this.id,
		lastModifiedDate: this.lastModifiedDate,
		locale: this.locale,
		modules: this.modules,
		ui5Theme: this.ui5Theme,
		urls: this.urls
	};
};

module.exports = ThemeInfoEntityBuilder;
