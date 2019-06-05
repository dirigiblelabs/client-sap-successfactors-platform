var method = EMEventEntityBuilder.prototype;

function EMEventEntityBuilder() {

}

method.eventDescription = function(eventDescription) {
	this.eventDescription = eventDescription;
	return this;
};

method.eventDescriptionMsgKey = function(eventDescriptionMsgKey) {
	this.eventDescriptionMsgKey = eventDescriptionMsgKey;
	return this;
};

method.eventName = function(eventName) {
	this.eventName = eventName;
	return this;
};

method.eventTime = function(eventTime) {
	this.eventTime = eventTime;
	return this;
};

method.eventType = function(eventType) {
	this.eventType = eventType;
	return this;
};

method.id = function(id) {
	this.id = id;
	return this;
};

method.eventAttributes = function(eventAttributes) {
	this.eventAttributes = eventAttributes;
	return this;
};

method.eventPayload = function(eventPayload) {
	this.eventPayload = eventPayload;
	return this;
};

method.process = function(process) {
	this.process = process;
	return this;
};

method.build = function() {
	return {
		eventDescription: this.eventDescription,
		eventDescriptionMsgKey: this.eventDescriptionMsgKey,
		eventName: this.eventName,
		eventTime: this.eventTime,
		eventType: this.eventType,
		id: this.id,
		eventAttributes: this.eventAttributes,
		eventPayload: this.eventPayload,
		process: this.process
	};
};

module.exports = EMEventEntityBuilder;
