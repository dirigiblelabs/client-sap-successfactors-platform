var method = MDFEnumValueEntityBuilder.prototype;

function MDFEnumValueEntityBuilder() {

}

method.de_DE = function(de_DE) {
	this.de_DE = de_DE;
	return this;
};

method.en_GB = function(en_GB) {
	this.en_GB = en_GB;
	return this;
};

method.en_US = function(en_US) {
	this.en_US = en_US;
	return this;
};

method.es_ES = function(es_ES) {
	this.es_ES = es_ES;
	return this;
};

method.fr_FR = function(fr_FR) {
	this.fr_FR = fr_FR;
	return this;
};

method.ja_JP = function(ja_JP) {
	this.ja_JP = ja_JP;
	return this;
};

method.key = function(key) {
	this.key = key;
	return this;
};

method.ko_KR = function(ko_KR) {
	this.ko_KR = ko_KR;
	return this;
};

method.nl_NL = function(nl_NL) {
	this.nl_NL = nl_NL;
	return this;
};

method.pt_BR = function(pt_BR) {
	this.pt_BR = pt_BR;
	return this;
};

method.pt_PT = function(pt_PT) {
	this.pt_PT = pt_PT;
	return this;
};

method.ru_RU = function(ru_RU) {
	this.ru_RU = ru_RU;
	return this;
};

method.value = function(value) {
	this.value = value;
	return this;
};

method.zh_CN = function(zh_CN) {
	this.zh_CN = zh_CN;
	return this;
};

method.zh_TW = function(zh_TW) {
	this.zh_TW = zh_TW;
	return this;
};

method.build = function() {
	return {
		de_DE: this.de_DE,
		en_GB: this.en_GB,
		en_US: this.en_US,
		es_ES: this.es_ES,
		fr_FR: this.fr_FR,
		ja_JP: this.ja_JP,
		key: this.key,
		ko_KR: this.ko_KR,
		nl_NL: this.nl_NL,
		pt_BR: this.pt_BR,
		pt_PT: this.pt_PT,
		ru_RU: this.ru_RU,
		value: this.value,
		zh_CN: this.zh_CN,
		zh_TW: this.zh_TW
	};
};

module.exports = MDFEnumValueEntityBuilder;
