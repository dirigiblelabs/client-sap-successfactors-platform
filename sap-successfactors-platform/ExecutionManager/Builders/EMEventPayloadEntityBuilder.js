var method = EMEventPayloadEntityBuilder.prototype;

function EMEventPayloadEntityBuilder() {

}

method.fileName = function(fileName) {
	this.fileName = fileName;
	return this;
};

method.fileType = function(fileType) {
	this.fileType = fileType;
	return this;
};

method.id = function(id) {
	this.id = id;
	return this;
};

method.mimeType = function(mimeType) {
	this.mimeType = mimeType;
	return this;
};

method.payload = function(payload) {
	this.payload = payload;
	return this;
};

method.type = function(type) {
	this.type = type;
	return this;
};

method.build = function() {
	return {
		fileName: this.fileName,
		fileType: this.fileType,
		id: this.id,
		mimeType: this.mimeType,
		payload: this.payload,
		type: this.type
	};
};

module.exports = EMEventPayloadEntityBuilder;
