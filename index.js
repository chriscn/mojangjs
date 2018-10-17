module.exports = require('./lib/api.js');

const mojangjs = require('./lib/api.js');

mojangjs.getUUID('Thorin', (err, user) => {
	if (err) console.error(err);
	mojangjs.getNameHistory(user.id, (err, namehistory) => {
		if (err) console.error(err);
		console.log(namehistory);
	});
});
