import { Mycontext } from './index'
import { auth } from '../http/authPageHttp'

export const Provider = props => {
	const { children } = props

	const authCheck = async (userData, method) => {
		const { data } = await auth(userData, method)
		localStorage.setItem('JWT', data.token)
		localStorage.setItem('userId', data.user)
	}

	return (
		<Mycontext.Provider
			value={{
				login: authCheck,
				user: {
					userId: localStorage.getItem('userId'),
					JWT: localStorage.getItem('JWT')
				}
			}}
		>
			{children}
		</Mycontext.Provider>
	)
}
