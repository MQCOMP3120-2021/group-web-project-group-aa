import { Mycontext } from './index'
import { auth } from '../http/authPageHttp'
import { withRouter } from 'react-router'

const Provider = props => {
	const { children } = props

	const authCheck = async (userData, method) => {
		const { data } = await auth(userData, method)
		localStorage.setItem('JWT', data.token)
		localStorage.setItem('userId', data.user)
	}

	const authLogout = () => {
		const { history } = props
		localStorage.removeItem('JWT')
		localStorage.removeItem('userId')
		history.push('/')
	}

	return (
		<Mycontext.Provider
			value={{
				login: authCheck,
				logout: authLogout,
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

export default withRouter(Provider)
