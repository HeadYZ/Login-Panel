import classes from './Navigation.module.css'

const Navigation = () => {
	return (
		<nav>
			<ul className={classes.nav__panel}>
				<li className={classes['nav__panel-item']}>Users</li>
				<li className={classes['nav__panel-item']}>Admin</li>
				<li className={classes['nav__panel-item']}>
					<button className={classes.nav__button}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
