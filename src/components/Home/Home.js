import Button from '../UI/Button'
import classes from './Home.module.css'

const Home = () => {
	return <div className={classes.home}>
        <h1>Welcome back !</h1>
        <Button>Logout</Button>
    </div>
}

export default Home
