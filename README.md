# SAP SuccessFactors Platform Client for Eclipse Dirigible

[![Eclipse License](http://img.shields.io/badge/license-Eclipse-brightgreen.svg)](LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/dirigiblelabs/client-sap-successfactors-ec.svg)](https://github.com/dirigiblelabs/client-sap-successfactors-ec/graphs/contributors)

## Usage:

```javascript
var response = require("http/v4/response");
var User = require("sap-successfactors-platform/UserManagement/User");

var userClient = User.getClient({
	host: "https://sandbox.api.sap.com/successfactors",
	headers: [{
		name: "apikey",
		value: "<YOUR-API-KEY>"
	}]
});

var user = userClient.get("userId", User.queryBuilder()
	.select(
		User.FIRST_NAME,
		User.LAST_NAME,
		User.USERNAME,
		User.USER_ID
	)
	.format("json")
	.build()
);

response.println(JSON.stringify(user));
```

## Usage (Async):

```javascript
var User = require("sap-successfactors-platform/UserManagement/User");

var userClientAsync = User.getClientAsync({
	host: "https://sandbox.api.sap.com/successfactors",
	headers: [{
		name: "apikey",
		value: "<YOUR-API-KEY>"
	}]
});

userClientAsync.listAsync({
	success: function(response, context) {
		console.log("Users count: " + JSON.parse(response.text).d.results.length);
	}
}, User.queryBuilder()
	.select(
		User.USERNAME,
		User.USER_ID,
		User.FIRST_NAME,
		User.LAST_NAME
	)
	.top(20)
	.format("json")
	.build(), {
		context: {
			data1: "Pass some contex parameters",
			data2: "..."
		}
	}
);

userClientAsync.execute();
```
> **Note:** In the examples SAP API Hub Sandbox system was used

## Generator:
```javascript
var response = require("http/v4/response");
var httpClient = require("http/v4/client");
var bytes = require("io/v4/bytes");

var specifications = [{
	module: "sap-successfactors-platform",
	group: "UserManagement",
	url: "..."
}];

var startTime = new Date();

for (var index = 0; index < specifications.length; index ++) {
	var specification = specifications[index];
	var data = httpClient.get(specification.url);
	var swagger = JSON.parse(data.text);

	var tags = getTags(swagger);

	for (var i in tags) {
		tags[i].properties = getProperties(swagger, i);
		for (var path in swagger.paths) {
			var operations = swagger.paths[path];
			if (operations[Object.keys(operations)[0]].tags[0] === i) {
				var operation = {};
				operation[path] = swagger.paths[path];
				for (var method in operation[path]) {
					operation[path][method].parameters = operation[path][method].parameters.filter(e => e.required === true);
					operation[path][method].responses = undefined;
					operation[path][method].summary = undefined;
				}
				tags[i].paths.push(operation);
			}
		}
	}
	
	for(var tagName in tags) {
		generateClient(specification.module, specification.group + "/", tagName, tags[tagName]);
		generateBuilder(specification.module, specification.group + "/", tagName, tags[tagName]);
	}
}

var endTime = new Date();
var duration = endTime.getTime() - startTime.getTime();

response.println("Done in " + duration + "!");

function generateBuilder(project, path, tagName, tag) {
	var builder = "";
	builder += "var method = " + tagName + "EntityBuilder.prototype;\n";
	builder += "\n";
	builder += "function " + tagName + "EntityBuilder() {\n";
	builder += "\n";
	builder += "}\n";
	builder += "\n";

	for (var i = 0; i < tag.properties.length; i ++) {
		var property = tag.properties[i].value;
		builder += "method." + property + " = function(" + property + ") {\n";
		builder += "	this." + property + " = " + property + ";\n";
		builder += "	return this;\n";
		builder += "};\n";
		builder += "\n";
	} 

	builder += "method.build = function() {\n";
	builder += "	return {\n";

	for (var i = 0; i < tag.properties.length; i ++) {
		var property = tag.properties[i].value;
		builder += "		" + property + ": this." + property;
		if (i + 1< tag.properties.length) {
			builder += ",\n";
		} else {
			builder += "\n";
		}
	}

	builder += "	};\n";
	builder += "};\n";
	builder += "\n";
	builder += "module.exports = " + tagName + "EntityBuilder;\n";
	createFile(project, path + "Builders/" + tagName + "EntityBuilder.js", builder);
}

function generateClient(project, path, tagName, tag) {
	var client = "";
	client = "var Client = require(\"sap/Client\");\n";
	client += "var ClientAsync = require(\"sap/ClientAsync\");\n";
	client += "var QueryBuilder = require(\"sap/QueryBuilder\")\n";
	client += "var " + tagName + "EntityBuilder = require(\"" + project + "/" + path + "Builders/" + tagName + "EntityBuilder\");\n";
	client += "\n";
	for (var i = 0; i < tag.properties.length; i ++) {
		client += "exports." + tag.properties[i].id + " = \"" + tag.properties[i].value + "\";\n";
	}
	client += "\n";
	client += "exports.queryBuilder = function() {\n";
	client += "	return new QueryBuilder();\n";
	client += "};\n";
	client += "\n";
	client += "exports.entityBuilder = function() {\n";
	client += "	return new " + tagName + "EntityBuilder();\n";
	client += "};\n";
	client += "\n";
	client += "exports.getClient = function(configurations) {\n";
	client += "	return new " + tagName + "Client(configurations);\n";
	client +=  "};\n";
	client += "\n";
	client += "exports.getClientAsync = function(configurations) {\n";
	client += "	return new " + tagName + "ClientAsync(configurations);\n";
	client +=  "};\n";
	client += "\n";
	client += "function " + tagName + "Client (configurations) {\n";
	client += "\n";
	client += "	var API_PATH = \"/odata/v2/" + tagName + "\";\n";
	client += "\n";
	client += "	this.client = new Client(configurations, API_PATH);\n";
	client += "\n";
	client += "	this.list = function(queryParameters, options) {\n";
	client += "		return this.client.list(queryParameters, options);\n";
	client += "	};\n";
	client += "\n";
	client += "	this.get = function(id, queryParameters, options) {\n";
	client += "		return this.client.get(getId(id), queryParameters, options);\n";
	client += "	};\n";
	client += "\n";
	client += "	this.create = function(entity, queryParameters, options) {\n";
	client += "		return this.client.create(entity, queryParameters, options);\n";
	client += "	};\n";
	client += "\n";
	client += "	this.update = function(id, entity, queryParameters, options) {\n";
	client += "		return this.client.update(getId(id), entity, queryParameters, options);\n";
	client += "	};\n";
	client += "\n";
	client += "	this.delete = function(id, queryParameters, options) {\n";
	client += "		return this.client.delete(getId(id), queryParameters, options);\n";
	client += "	};\n";
	client += "\n";
	client += "	this.count = function() {\n";
	client += "		return this.client.get(\"/$count\");\n";
	client += "	};\n";
	client += "}\n";
	client += "\n";
	client += "function " + tagName + "ClientAsync (configurations) {\n";
	client += "\n";
	client += "	var API_PATH = \"/odata/v2/" + tagName + "\";\n";
	client += "\n";
	client += "	this.client = new ClientAsync(configurations, API_PATH);\n";
	client += "\n";
	client += "	this.listAsync = function(callback, queryParameters, options) {\n";
	client += "		return this.client.listAsync(callback, queryParameters, options);\n";
	client += "	};\n";
	client += "\n";
	client += "	this.getAsync = function(callback, id, queryParameters, options) {\n";
	client += "		return this.client.getAsync(callback, getId(id), queryParameters, options);\n";
	client += "	};\n";
	client += "\n";
	client += "	this.createAsync = function(callback, entity, queryParameters, options) {\n";
	client += "		return this.client.createAsync(callback, entity, queryParameters, options);\n";
	client += "	};\n";
	client += "\n";
	client += "	this.updateAsync = function(callback, id, entity, queryParameters, options) {\n";
	client += "		return this.client.update(callback, getId(id), entity, queryParameters, options);\n";
	client += "	};\n";
	client += "\n";
	client += "	this.deleteAsync = function(callback, id, queryParameters, options) {\n";
	client += "		return this.client.deleteAsync(callback, getId(id), queryParameters, options);\n";
	client += "	};\n";
	client += "\n";
	client += "	this.countAsync = function(callback) {\n";
	client += "		return this.client.getAsync(callback, \"/$count\");\n";
	client += "	};\n";
	client += "\n";
	client += "	this.execute = function() {\n";
	client += "		return this.client.execute();\n";
	client += "	};\n";
	client += "}\n";
	client += "\n";
	client += "function getId(id) {\n";
	client += "	return \"('\" + id + \"')\";\n";
	client += "}\n";

	createFile(project, path + tagName + ".js", client);
}

function getTags(swagger) {
	var tags = swagger.tags.map(e => e.name);
	var keys = {};
	for (var i = 0; i < tags.length; i ++) {
		keys[tags[i]] = {
			properties: [],
			paths: []
		};
	}
	return keys;
}

function getProperties(swagger, tag) {
	var definitionId = getDefinitionPrefix() + tag + getDefinitionSuffix();
	var definition = swagger.definitions[definitionId];
	var properties = [];
	if (definition) {
		properties = Object.keys(definition.properties).map(function (e) {
			return {
				id: toUpperSnakeCase(e),
				value: e
			};
		});
	}
	return properties;
}

function getDefinitionPrefix() {
	return "SFOData.";
}

function getDefinitionSuffix() {
	return "";
}

function toUpperSnakeCase(value) {
	return value.split(/(?=[A-Z])/).join("_").toUpperCase();
}

function createFile(project, name, fileContent) {
	var workspace = org.eclipse.dirigible.api.v3.workspace.WorkspaceFacade.getWorkspace("workspace");
	var content = bytes.toJavaBytes(bytes.textToByteArray(fileContent));
	workspace.getProject(project).createFile(name, content);
}
```
