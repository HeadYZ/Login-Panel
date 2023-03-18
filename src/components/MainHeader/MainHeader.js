import { useContext } from 'react'
import Navigation from './Navigation'
import classes from './MainHeader.module.css'
import AuthContext from '../store/auth-context'

const MainHeader = () => {
	const ctx = useContext(AuthContext)
	return (
		<header className={classes.header}>
			<p>A Typical Page</p>
			{ctx.isLoggedIn && <Navigation />}
		</header>
	)
}

export default MainHeader
