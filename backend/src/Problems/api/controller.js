class ProblemController {
	constructor(problemRepository) {
		this.problemRepository = problemRepository;
	}

	async create(req, res) {
		const {
			body: { leetcodeID, name },
		} = req;
		console.log(leetcodeID, name)
		this.problemRepository
			.insert(req.body)
			.then((result) => {
				console.log(`The following problem has been inserted; n:${leetcodeID} - ${name}`);
				return Promise.resolve(
					res.json({
						message: 'OK',
						timestamp: Date.now(),
						result,
					})
				);
			})
			.catch((e) => {
				console.error(
					`An error occurred when trying to integrate the following leetcode problem: ${leetcodeID} - ${name}: ${e.message}`
				);
				return Promise.reject(
					res.status(500).json({
						errorMessage: e.message,
						timestamp: Date.now(),
						code: 'insert-error',
					})
				);
			});
	}
}

module.exports = ProblemController;