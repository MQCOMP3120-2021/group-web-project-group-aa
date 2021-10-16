import React, { Component } from 'react'
import Button from '@mui/material/Button'
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
			buttonText: 'Login'
		}
		console.log(props)
	}
	tabSwitch = e => {
		this.setState({
			buttonText: e === 0 ? 'Login' : 'Register'
		})
	}
	authCheck = async () => {
		const { history } = this.props
		const { AuthData, buttonText } = this.state

		const { status } = await auth(AuthData, buttonText)
		if (status) {
			history.push('/homepage')
		} else {
			alert('error')
		}
	}
	accountHandle = e => {
		this.setState({
			AuthData: {
				...this.state.AuthData,
				account: e
			}
		})
	}
	passwordHandle = e => {
		this.setState({
			AuthData: {
				...this.state.AuthData,
				password: e
			}
		})
	}
	render() {
		const { tabSwitch, authCheck, passwordHandle, accountHandle } = this
		const { buttonText, AuthData } = this.state
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
								textHandle={accountHandle}
							/>
							<TextInput
								label="password"
								type="password"
								textHandle={passwordHandle}
							/>
							<a className={`submitBtn ${buttonText}`} onClick={authCheck}>
								{buttonText}
							</a>
						</div>
					</TabSwitch>
				</div>
			</div>
		)
	}
}

export default withRouter(LoginPage)
