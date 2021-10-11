const jwt = require('jsonwebtoken')
const User = require('../models/user')
const ErrorHandler = require('../ultil')

createAuthToken = id => {
	return jwt.sign({ id }, 'this is token', {
		expiresIn: 3 * 24 * 60 * 60
	})
}
module.exports.register_user = async (req, res) => {
	const { username, password } = req.body
	try {
		//create new user into data DB,this is async which it return promise
		const user = await User.create({ username, password })
		const token = createAuthToken(user._id)
		res.cookie('jwt', token, { httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000 })
		res.status(201).json({ user: user._id, token })
	} catch (err) {
		const errorText = ErrorHandler.AuthHandleErros(err)
		res.status(400).send(errorText)
	}
}

module.exports.login_user = async (req, res) => {
	const { username, password } = req.body
	try {
		const user = await User.login(username, password)
		const token = createAuthToken(user._id)
		res.cookie('jwt', token, { httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000 })
		res.status(200).json({ user: user._id, token })
	} catch (err) {
		const errorText = ErrorHandler.AuthHandleErros(err)
		res.status(400).json({ errorText })
	}
}

module.exports.logout_user = (req, res) => {
	res.cookie('jwt', '', { maxAge: 1 })
	res.redirect('/')
}
