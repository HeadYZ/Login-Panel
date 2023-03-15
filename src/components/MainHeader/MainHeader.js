import classes from './MainHeader.module.css'
import Navigation from './Navigation'

const MainHeader = () => {
	return (
		<header className={classes.header}>
			<p>A Typical Page</p>
			<Navigation />
		</header>
	)
}

export default MainHeader
