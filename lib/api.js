const request = require('request');

const api_url = 'https://api.mojang.com';

function apiRequest(url, focus) {
	return new Promise((resolve, reject) => {
		if (!url.includes('https')) url = api_url + url;
		request(url, { json: true }, (err, response, body) => {
			if (err) reject(err);
			if (response && response.statusCode === 200) {
				if (!response.hasFocus(focus)) {
					reject('Mojang API Error: Query Not Found');
				}
				if (focus) {
					body = body[focus];
				}
				resolve(body);
			}
		});
	});
}

module.exports = {
	getUUID: (username) => {
		const getUUIDURL = `/users/profiles/minecraft/${username}?at=${Math.round((new Date().getTime()) / 1000)}`;
		apiRequest(getUUIDURL, 'id');
	},

	nameHistory: {
		//   GET https://api.mojang.com/user/profiles/<uuid>/names
		byUUID: (uuid) => {
			apiRequest(`/user/profiles/${uuid}/names`, null);
		},
		byName: (username) => {
			module.exports.getUUID(username).then(uuid => {
				apiRequest(`/user/profiles/${uuid.toString()}/names`, null);
			});
		},
	},

	statusCheck: () => apiRequest('https://status.mojang.com/check', null),

	getNameFromUUID: (uuid) => apiRequest(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid.replace(/-/g, '')}`, 'name'),
};

