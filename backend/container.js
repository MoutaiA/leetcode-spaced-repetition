const awilix = require("awilix");

const container = awilix.createContainer({
	injectionMode: awilix.InjectionMode.PROXY,
	strict: true
});

container.register({

});

module.exports = container;
