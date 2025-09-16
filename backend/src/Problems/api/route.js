const express = require('express');

const ProblemController = require('./controller');
const problemController = new ProblemController();

const router = express.Router();

router.post('/', problemController.create);

module.exports = router;