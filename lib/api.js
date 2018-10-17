const request = require('request');

const api_url = 'https://api.mojang.com';

module.exports = {
	getUUID: (username, callback) => {
		if (username > 16) {
			return (`Username can't be more than 16 characters. Your's was ${username.length}`, null);
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

	nameHistory: {
		byName: (name, callback) => {
			console.log('other stuff');
			let uuid = '';
			this.getUUID(name, (err, player) => {
				if (err) console.error(err);
				uuid = player.id;
			});
			this.byUUID(uuid, (err, res) => { });
		},
		byUUID: (uuid, callback) => {
			console.log('other other stuff');

		},
	}
};

