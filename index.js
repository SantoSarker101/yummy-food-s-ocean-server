const express = require('express');
const app = express();
const port = process.env.PORT || 5000

app.get('/', (req, res) =>{
	res.send('Yummy Foods Ocean is running ')
});

app.listen(port, () => {
	console.log(`Yummy Foods Ocean is running on port: ${port}`);
})