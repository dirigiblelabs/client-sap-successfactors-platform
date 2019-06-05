var method = SuccessStoreContentBlobEntityBuilder.prototype;

function SuccessStoreContentBlobEntityBuilder() {

}

method.contentId = function(contentId) {
	this.contentId = contentId;
	return this;
};

method.build = function() {
	return {
		contentId: this.contentId
	};
};

module.exports = SuccessStoreContentBlobEntityBuilder;
