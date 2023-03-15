import { useEffect, useState } from 'react'
import Button from '../UI/Button'
import classes from './Login.module.css'

const Login = () => {
	const [enteredEmail, setEnteredEmail] = useState('')
	const [enteredPassword, setEnteredPassword] = useState('')
	const [emailIsValid, setEmailIsValid] = useState(false)
	const [passwordIsValid, setPasswordIsValid] = useState(false)
	const [formIsValid, setFormIsValid] = useState(false)

	useEffect(() => {
		if (emailIsValid && passwordIsValid) {
			setFormIsValid(true)
		} else {
			setFormIsValid(false)
		}
	}, [emailIsValid, passwordIsValid])

	const onEmailHandler = e => {
		setEnteredEmail(e.target.value)

		if (e.target.value.includes('@')) {
			setEmailIsValid(true)
		} else {
			setEmailIsValid(false)
		}
	}

	const onPasswordHandler = e => {
		setEnteredPassword(e.target.value)
		if (e.target.value.trim().length > 5) {
			setPasswordIsValid(true)
		} else {
			setPasswordIsValid(false)
		}
	}

	return (
		<form className={classes.form}>
			<div className={classes.form__box}>
				<label className={classes.form__label} htmlFor='e-mail'>
					E-Mail
				</label>
				<input className={classes.form__input} id='e-mail' type='email' onChange={onEmailHandler}></input>
			</div>
			<div className={classes.form__box}>
				<label className={classes.form__label} htmlFor='password'>
					Password
				</label>
				<input className={classes.form__input} id='password' type='password' onChange={onPasswordHandler}></input>
			</div>
			<Button disabled={!formIsValid}>Login</Button>
		</form>
	)
}

export default Login
