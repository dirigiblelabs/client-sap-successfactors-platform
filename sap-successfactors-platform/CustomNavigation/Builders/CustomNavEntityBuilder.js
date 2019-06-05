var method = CustomNavEntityBuilder.prototype;

function CustomNavEntityBuilder() {

}

method.altText = function(altText) {
	this.altText = altText;
	return this;
};

method.alwaysShow = function(alwaysShow) {
	this.alwaysShow = alwaysShow;
	return this;
};

method.isModule = function(isModule) {
	this.isModule = isModule;
	return this;
};

method.isSelected = function(isSelected) {
	this.isSelected = isSelected;
	return this;
};

method.label = function(label) {
	this.label = label;
	return this;
};

method.newWindow = function(newWindow) {
	this.newWindow = newWindow;
	return this;
};

method.title = function(title) {
	this.title = title;
	return this;
};

method.url = function(url) {
	this.url = url;
	return this;
};

method.build = function() {
	return {
		altText: this.altText,
		alwaysShow: this.alwaysShow,
		isModule: this.isModule,
		isSelected: this.isSelected,
		label: this.label,
		newWindow: this.newWindow,
		title: this.title,
		url: this.url
	};
};

module.exports = CustomNavEntityBuilder;
