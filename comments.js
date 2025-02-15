// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let comments = [
	{
		name: 'Larry',
		comment: 'First!'
	},
	{
		name: 'Curly',
		comment: 'Great post!'
	},
	{
		name: 'Moe',
		comment: 'I disagree with your opinion.'
	}
];

app.get('/comments', (req, res) => {
	res.json(comments);
});

app.post('/comments', (req, res) => {
	const comment = req.body;
	if (!comment.name || !comment.comment) {
		return res.status(400).send('Name and comment are required.');
	}
	comments.push(comment);
	res.status(201).send('Comment added.');
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});