var method = ThemeTemplateEntityBuilder.prototype;

function ThemeTemplateEntityBuilder() {

}

method.bodyStyleClass = function(bodyStyleClass) {
	this.bodyStyleClass = bodyStyleClass;
	return this;
};

method.footer = function(footer) {
	this.footer = footer;
	return this;
};

method.header = function(header) {
	this.header = header;
	return this;
};

method.id = function(id) {
	this.id = id;
	return this;
};

method.langDir = function(langDir) {
	this.langDir = langDir;
	return this;
};

method.locale = function(locale) {
	this.locale = locale;
	return this;
};

method.scripts = function(scripts) {
	this.scripts = scripts;
	return this;
};

method.styles = function(styles) {
	this.styles = styles;
	return this;
};

method.template = function(template) {
	this.template = template;
	return this;
};

method.ui5BaseThemeRootUrl = function(ui5BaseThemeRootUrl) {
	this.ui5BaseThemeRootUrl = ui5BaseThemeRootUrl;
	return this;
};

method.build = function() {
	return {
		bodyStyleClass: this.bodyStyleClass,
		footer: this.footer,
		header: this.header,
		id: this.id,
		langDir: this.langDir,
		locale: this.locale,
		scripts: this.scripts,
		styles: this.styles,
		template: this.template,
		ui5BaseThemeRootUrl: this.ui5BaseThemeRootUrl
	};
};

module.exports = ThemeTemplateEntityBuilder;
