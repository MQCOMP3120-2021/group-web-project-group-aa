const jwt = require('jsonwebtoken')

const authChecker = (req, res, next) => {
	const token = req.cookies.jwt
	if (token) {
		jwt.verify(token, 'this is token', (err, result) => {
			if (err) {
				console.log('???ssjj')
				res.redirect('/')
			} else {
				console.log(result, 'donw!!')
				next()
			}
		})
	} else {
		res.redirect('/')
	}
}

module.exports = {
	authChecker
}
