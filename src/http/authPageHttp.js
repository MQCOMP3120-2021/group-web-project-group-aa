import axios from 'axios'

const instance = axios.create({})

export const auth = async (authData, method) => {
	const { account, password } = authData
	let url = 'api/login'
	if (method === 'Register') {
		url = 'api/register'
	}
	return instance({
		url,
		method: 'post',
		data: {
			username: account,
			password: password
		}
	})
}
