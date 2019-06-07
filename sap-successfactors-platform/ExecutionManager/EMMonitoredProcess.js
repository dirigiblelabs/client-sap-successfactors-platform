var Client = require("sap/Client");
var QueryBuilder = require("sap/QueryBuilder")
var EMMonitoredProcessEntityBuilder = require("sap-successfactors-platform/ExecutionManager/Builders/EMMonitoredProcessEntityBuilder");

exports.CO_RELATOR_ID = "coRelatorId";
exports.FIRST_EVENT_TIME = "firstEventTime";
exports.HAS_ERRORS = "hasErrors";
exports.HAS_WARNINGS = "hasWarnings";
exports.LAST_EVENT_TIME = "lastEventTime";
exports.MODULE_NAME = "moduleName";
exports.MONITORED_PROCESS_ID = "monitoredProcessId";
exports.PROCESS_DEFINITION_ID = "processDefinitionId";
exports.PROCESS_DEFINITION_NAME = "processDefinitionName";
exports.PROCESS_INSTANCE_ID = "processInstanceId";
exports.PROCESS_INSTANCE_NAME = "processInstanceName";
exports.PROCESS_STATE = "processState";
exports.PROCESS_TYPE = "processType";

exports.queryBuilder = function() {
	return new QueryBuilder();
};

exports.entityBuilder = function() {
	return new EMMonitoredProcessEntityBuilder();
};

exports.getClient = function(configurations) {
	return new EMMonitoredProcessClient(configurations);
};

function EMMonitoredProcessClient (configurations) {

	var API_PATH = "/odata/v2/EMMonitoredProcess";

	this.client = new Client(configurations, API_PATH);

	this.list = function(queryParameters) {
		return this.client.list(queryParameters);
	};

	this.get = function(id, queryParameters) {
		return this.client.get(getId(id), queryParameters);
	};

	this.create = function(entity, queryParameters) {
		return this.client.create(entity, queryParameters);
	};

	this.update = function(id, entity, queryParameters) {
		return this.client.update(getId(id), entity, queryParameters);
	};

	this.delete = function(id, queryParameters) {
		return this.client.delete(getId(id), queryParameters);
	};

	this.count = function() {
		return this.client.get("/$count");
	};
}

function getId(id) {
	return "('" + id + "')";
}
