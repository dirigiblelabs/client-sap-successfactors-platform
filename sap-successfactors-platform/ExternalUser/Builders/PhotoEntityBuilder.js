var method = PhotoEntityBuilder.prototype;

function PhotoEntityBuilder() {

}

method.height = function(height) {
	this.height = height;
	return this;
};

method.lastModified = function(lastModified) {
	this.lastModified = lastModified;
	return this;
};

method.lastModifiedDateTime = function(lastModifiedDateTime) {
	this.lastModifiedDateTime = lastModifiedDateTime;
	return this;
};

method.lastModifiedWithTZ = function(lastModifiedWithTZ) {
	this.lastModifiedWithTZ = lastModifiedWithTZ;
	return this;
};

method.mimeType = function(mimeType) {
	this.mimeType = mimeType;
	return this;
};

method.photo = function(photo) {
	this.photo = photo;
	return this;
};

method.photoId = function(photoId) {
	this.photoId = photoId;
	return this;
};

method.photoName = function(photoName) {
	this.photoName = photoName;
	return this;
};

method.photoType = function(photoType) {
	this.photoType = photoType;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.width = function(width) {
	this.width = width;
	return this;
};

method.build = function() {
	return {
		height: this.height,
		lastModified: this.lastModified,
		lastModifiedDateTime: this.lastModifiedDateTime,
		lastModifiedWithTZ: this.lastModifiedWithTZ,
		mimeType: this.mimeType,
		photo: this.photo,
		photoId: this.photoId,
		photoName: this.photoName,
		photoType: this.photoType,
		userId: this.userId,
		width: this.width
	};
};

module.exports = PhotoEntityBuilder;
