const request = require('request');

const api_url = 'https://api.mojang.com';

module.exports = {
	getUUID: (username, callback) => {
		if (username > 16) {
			return new Error('Username must be less than 16 characters.');
		} else {
			const url = `${api_url}/users/profiles/minecraft/${username}?at=${Math.round((new Date().getTime()) / 1000)}`;
			request(url, function(error, response, body) {
				if (error) return callback(`MCUUID Error: ${error}`, null);
				if (response && response.statusCode === 200) {
					return callback(null, JSON.parse(body));
				}
			});
		}
	},
	getNameHistory: (uuid, callback) => {
		if (uuid.match(/[a-z0-9]{8}-([a-z0-9]{4}-){3}[a-z0-9]{12}/)) {
			const url = `${api_url}/user/profiles/${uuid}/names`;
			request(url, function(error, response, body) {
				if (error) return callback(`MCUUID Error: ${error}`, null);
				if (response && response.statusCode === 200) {
					return callback(null, JSON.parse(body));
				}
			});
		}
	}
};

