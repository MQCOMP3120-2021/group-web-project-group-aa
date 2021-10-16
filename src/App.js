import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homepage'
import BookDetailPage from './pages/bookDetail'

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route
						exact
						path="/"
						render={() => {
							return <LoginPage />
						}}
					/>
					<Route exact path="/homepage" component={HomePage} />
					<Route exact path="/bookDetail/:id" component={BookDetailPage} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App
