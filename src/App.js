import React, { useEffect, useState } from 'react'
import Button from './components/UI/Button'
import classes from './App.module.css'
import Navigation from './components/MainHeader/Navigation'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'
import AuthContext from './components/store/auth-context'

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const loginHandler = () => {
		setIsLoggedIn(true)
		localStorage.setItem('isLoggedIn', '1')
	}

	const logoutHandler = () => {
		setIsLoggedIn(false)
		localStorage.setItem('isLoggedIn', '0')
	}

	useEffect(() => {
		const storageLoginInfo = localStorage.getItem('isLoggedIn')
		if (storageLoginInfo === '1') {
			setIsLoggedIn(true)
		}
	}, [])

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogout: logoutHandler,
				onLogin: loginHandler
			}}>
			<MainHeader></MainHeader>
			{isLoggedIn && <Home></Home>}
			{!isLoggedIn && <Login></Login>}
		</AuthContext.Provider>
	)
}

export default App
