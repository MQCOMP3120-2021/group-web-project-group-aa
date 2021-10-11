module.exports.AuthHandleErros = err => {
	let error = ''
	if (err.message.includes('please enter your username')) {
		error = 'please check up your username '
	} else if (err.message.includes('please enter your password')) {
		error = 'please check up your password '
	} else if (err.message.includes('duplicate key error')) {
		error = 'this username had been used'
	} else if (err.message.includes('minimum password length is 6 characters')) {
		error = 'minimum password length is 6 characters'
	} else if (err.message.includes('password incorrect')) {
		error = 'password incorrect'
	} else if (err.message.includes('username incorrect')) {
		error = 'username incorrect'
	}
	return error
}
