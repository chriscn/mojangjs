const request = require('request');

const api_url = 'https://api.mojang.com';

function apiRequest(url, focus, callback) {
	request(url, { json: true }, function(err, response, body) {
		if (err) return callback(err, null);
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
			return (`Username can't be more than 16 characters. Your's was ${username.length}`, null);
		} else {
			const url = `${api_url}/users/profiles/minecraft/${username}?at=${Math.round((new Date().getTime()) / 1000)}`;

			apiRequest(url, 'id', (err, json) => callback(err, json));
		}
	},

	nameHistory: {
		byName: (name, callback) => {
			console.log('other stuff');
			let uuid = '';
			this.getUUID(name, (err, player) => {
				if (err) console.error(err);
				uuid = player.id;
			});

			this.byUUID(uuid, (err, res) => callback(err, res));
		},
		byUUID: (uuid, callback) => {
			console.log('other other stuff');

		},
	},
};

