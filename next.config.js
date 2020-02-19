const path = require('path');
require('dotenv').config();

module.exports = {
	publicRuntimeConfig: {
		API: process.env.API,
		SELF_URL: process.env.SELF_URL,
		SUPERHEROAPI_KEY: process.env.SUPERHEROAPI_KEY
	},
	webpack: config => {
		config.resolve.alias['~'] = path.resolve(__dirname);
		config.resolve.alias['components'] = path.join(__dirname, 'components');
		return config;
	}
};
