const request = require('request');

const api_url = 'https://api.mojang.com';

function apiRequest(url, focus, callback) {
	if (!url.includes('https')) url = api_url + url;
	request(url, { json: true }, function(err, response, body) {
		if (err) return callback(err);
		if (response && response.statusCode === 200) {
			if (focus) {
				body = body[focus];
			}
			return callback(null, body);
		}
	});
}

module.exports = {
	getUUID: (username, callback) => {
		if (username > 16) {
			callback(`Username can't be more than 16 characters. Your's was ${username.length}`);
		} else {
			const url = `/users/profiles/minecraft/${username}?at=${Math.round((new Date().getTime()) / 1000)}`;

			apiRequest(url, 'id', (err, json) => callback(err, json));
		}
	},

	nameHistory: {
		//   GET https://api.mojang.com/user/profiles/<uuid>/names
		byUUID: (uuid, callback) => {
			apiRequest(`/user/profiles/${uuid}/names`, null, (err, res) => callback(err, res));
		},
		byName: (username, callback) => {
			module.exports.getUUID(username, (err, uuid) => {
				if (err) return callback(err);
				apiRequest(`/user/profiles/${uuid.toString()}/names`, null, (err, res) => callback(err, res));
			});
		},
	},

	statusCheck: (callback) => {
		apiRequest('https://status.mojang.com/check', null, (err, res) => callback(err, res));
	},

	getNameFromUUID: (uuid, callback) => {
		apiRequest(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`, 'name', (err, res) => callback(err, res));
	},
};

