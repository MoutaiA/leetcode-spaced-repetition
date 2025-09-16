const express = require('express');

const problemRoutes = require('./src/Problems/api/route');

// const container = require('./container.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.json('OK');
});

app.use('/api/v1/problems', problemRoutes);

module.exports = app;
