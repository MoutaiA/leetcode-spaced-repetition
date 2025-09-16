const createRequest = require('./create/request');
const createResponse = require('./create/response');

module.exports = {
	create: {
		request: createRequest,
		response: createResponse
	}
};