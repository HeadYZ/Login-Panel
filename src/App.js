import React, { useState } from 'react'
import Button from './components/UI/Button'
import classes from './App.module.css'
import Navigation from './components/MainHeader/Navigation'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const loginHandler = () => {

	}

	return (
		<React.Fragment>
			<MainHeader></MainHeader>
			{isLoggedIn && <Home></Home>}
			{!isLoggedIn && <Login></Login>}
		</React.Fragment>
	)
}

export default App
