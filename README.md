# mcuuid
A lightweight, simple way to get UUIDs of usernames.
## Usage
Of course after running `npm install mojangjs` the methods are simple;
```js
  const mojangjs = require('mojangjs');
  
  mojangjs.getUUID('Thorin', (err, res) => {
  	if (err) console.error(err);
  	console.log(res.id); // Prints the UUID
  	console.log(res.name); // Prints the name provided.
  });
```
