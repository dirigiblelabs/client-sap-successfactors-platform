var method = EMMonitoredProcessEntityBuilder.prototype;

function EMMonitoredProcessEntityBuilder() {

}

method.coRelatorId = function(coRelatorId) {
	this.coRelatorId = coRelatorId;
	return this;
};

method.firstEventTime = function(firstEventTime) {
	this.firstEventTime = firstEventTime;
	return this;
};

method.hasErrors = function(hasErrors) {
	this.hasErrors = hasErrors;
	return this;
};

method.hasWarnings = function(hasWarnings) {
	this.hasWarnings = hasWarnings;
	return this;
};

method.lastEventTime = function(lastEventTime) {
	this.lastEventTime = lastEventTime;
	return this;
};

method.moduleName = function(moduleName) {
	this.moduleName = moduleName;
	return this;
};

method.monitoredProcessId = function(monitoredProcessId) {
	this.monitoredProcessId = monitoredProcessId;
	return this;
};

method.processDefinitionId = function(processDefinitionId) {
	this.processDefinitionId = processDefinitionId;
	return this;
};

method.processDefinitionName = function(processDefinitionName) {
	this.processDefinitionName = processDefinitionName;
	return this;
};

method.processInstanceId = function(processInstanceId) {
	this.processInstanceId = processInstanceId;
	return this;
};

method.processInstanceName = function(processInstanceName) {
	this.processInstanceName = processInstanceName;
	return this;
};

method.processState = function(processState) {
	this.processState = processState;
	return this;
};

method.processType = function(processType) {
	this.processType = processType;
	return this;
};

method.build = function() {
	return {
		coRelatorId: this.coRelatorId,
		firstEventTime: this.firstEventTime,
		hasErrors: this.hasErrors,
		hasWarnings: this.hasWarnings,
		lastEventTime: this.lastEventTime,
		moduleName: this.moduleName,
		monitoredProcessId: this.monitoredProcessId,
		processDefinitionId: this.processDefinitionId,
		processDefinitionName: this.processDefinitionName,
		processInstanceId: this.processInstanceId,
		processInstanceName: this.processInstanceName,
		processState: this.processState,
		processType: this.processType
	};
};

module.exports = EMMonitoredProcessEntityBuilder;
