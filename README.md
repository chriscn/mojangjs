# mojangjs
A lightweight, simple way to get UUIDs of usernames.
## Usage
Of course after running `npm install mojangjs` the methods are simple;
```js
  const mojangjs = require('mojangjs');
  
  mojangjs.getUUID('Thorin', (err, uuid) => {
  	if (err) console.error(err);
  	console.log(uuid); // prints the UUID
  });
```
