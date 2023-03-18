import { useContext } from 'react'
import AuthContext from '../store/auth-context'
import classes from './Navigation.module.css'

const Navigation = props => {
	const ctx = useContext(AuthContext)

	return (
		<nav>
			<ul className={classes.nav__panel}>
				<li className={classes['nav__panel-item']}>Users</li>
				<li className={classes['nav__panel-item']}>Admin</li>
				<li className={classes['nav__panel-item']}>
					<button className={classes.nav__button} onClick={ctx.onLogout}>
						Logout
					</button>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
