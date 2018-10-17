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
};

