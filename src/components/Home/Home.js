import Button from '../UI/Button'
import { useContext } from 'react'
import classes from './Home.module.css'
import AuthContext from '../store/auth-context'

const Home = props => {
	const ctx = useContext(AuthContext)
	return (
		<div className={classes.home}>
			<h1>Welcome back !</h1>
			<Button onClick={ctx.onLogout}>Logout</Button>
		</div>
	)
}

export default Home
