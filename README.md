# mojangjs
A lightweight, simple way to get UUIDs of usernames.
## Usage
Of course after running `npm install mojangjs` the methods are simple;
## Methods
#### `getUUID(uuid, callback)` - Gets the UUID of the player.
```js  
mojangjs.getUUID('Thorin', (err, uuid) => {
	if (err) console.error(err);
	console.log(uuid);
});
```
#### `nameHistory.byName(playername, callback)` - Gets the name history of a player.
```js
mojangjs.nameHistory.byName('Thorin', (err, namehistory) => {
	if (err) console.error(err);
	console.log(namehistory);
});
```
#### `nameHistory.byUUID(uuid, callback)` - Gets the name history of a UUID.
```js
mojangjs.nameHistory.byUUID('5de3d1d51a954fb3a2b788e4938ae11c', (err, namehistory) => {
	if (err) console.error(err);
	console.log(namehistory);
});
```
#### `statusCheck(callback)` - Gets the current status from Mojang.
```js
mojangjs.statusCheck((err, status) => {
	if (err) console.error(err);
	console.log(status);
});
```
#### `getNameFromUUID(uuid, callback)` - Gets the current playername from a UUID.
```js
mojangjs.getNameFromUUID('5de3d1d51a954fb3a2b788e4938ae11c', (err, playername) => {
	if (err) console.error(err);
	console.log(playername);
});
```
