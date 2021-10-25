import React, { Component } from 'react'
import Notification from '../component/Notification'
import TabSwitch from '../component/tabSwitch/tabSwitch'
import TextInput from '../component/TextInput'
import { AuthFormData } from '../tool/tabSwitchData'
import { auth } from '../http/authPageHttp'
import { withRouter } from 'react-router'

import '../style/page/loginPage.scss'
class LoginPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			AuthData: { account: '', password: '' },
			authMethod: 'Login',
			isLoginFailed: false,
			authResponse: ''
		}
	}
	tabSwitch = e => {
		this.setState({
			authMethod: e === 0 ? 'Login' : 'Register'
		})
	}
	authCheck = async () => {
		const { history } = this.props
		const { AuthData, authMethod } = this.state

		try {
			await auth(AuthData, authMethod)
			history.push('/homepage')
		} catch (err) {
			const { errorText } = err.response.data
			this.setState({
				isLoginFailed: true,
				authResponse: errorText
			})
		}
	}
	authDataHandle = (input, type) => {
		this.setState({
			AuthData: {
				...this.state.AuthData,
				[type]: input
			}
		})
	}
	render() {
		const { tabSwitch, authCheck, authDataHandle } = this
		const { authMethod, isLoginFailed, authResponse } = this.state
		return (
			<div className="AuthPage">
				<div className="AuthPage__form">
					<TabSwitch
						tabOptions={AuthFormData}
						switchTab={tabSwitch}
						isMultiPannel={false}
					>
						<div className="AuthPage__form__input">
							<TextInput
								label="username"
								type="text"
								textHandle={e => authDataHandle(e, 'account')}
							/>
							<TextInput
								label="password"
								type="password"
								textHandle={e => authDataHandle(e, 'password')}
							/>
							<a
								href="/#"
								className={`submitBtn ${authMethod}`}
								onClick={authCheck}
							>
								{authMethod}
							</a>
						</div>
					</TabSwitch>
				</div>
				{isLoginFailed && (
					<Notification
						color="warning"
						severity="warning"
						text={authResponse}
					/>
				)}
			</div>
		)
	}
}

export default withRouter(LoginPage)
