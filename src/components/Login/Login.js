import { useRef, useEffect, useState, useReducer, useContext } from 'react'
import AuthContext from '../store/auth-context'
import Button from '../UI/Button'
import Input from '../UI/Input'
import classes from './Login.module.css'

const Login = props => {
	const ctx = useContext(AuthContext)
	const [formIsValid, setFormIsValid] = useState(false)
	const passwordInputRef = useRef()
	const emailInputRef = useRef()

	const [emailState, dispatchEmail] = useReducer(
		(state, action) => {
			if (action.type === 'USER_INPUT') {
				return { value: action.value, isValid: action.value.includes('@') }
			}
			return { value: '', isValid: undefined }
		},
		{ value: '', isValid: undefined }
	)

	const [passwordState, dispatchPassword] = useReducer(
		(state, action) => {
			if (action.type === 'USER_INPUT') {
				return { value: action.value, isValid: action.value.trim().length > 5 }
			}
			return { value: '', isValid: undefined }
		},
		{ value: '', isValid: undefined }
	)

	useEffect(() => {
		if (emailState.isValid && passwordState.isValid) {
			setFormIsValid(true)
		} else {
			setFormIsValid(false)
		}
	}, [emailState.isValid, passwordState.isValid])

	const onEmailHandler = e => {
		dispatchEmail({ type: 'USER_INPUT', value: e.target.value })
	}

	const onPasswordHandler = e => {
		dispatchPassword({ type: 'USER_INPUT', value: e.target.value })
	}

	const submitHandler = e => {
		e.preventDefault()

		if (formIsValid) {
			ctx.onLogin()
		} else if (!emailState.isValid) {
			emailInputRef.current.activate()
		} else {
			passwordInputRef.current.activate()
		}

		if (!formIsValid) {
			e.target.className = `${classes.form} ${classes.valid}`
		}
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={emailInputRef}
				id={'email'}
				label={'E-mail'}
				type={'email'}
				isValid={emailState.isValid}
				onChange={onEmailHandler}></Input>

			<Input
				ref={passwordInputRef}
				id={'password'}
				label={'Password'}
				type={'password'}
				isValid={passwordState.isValid}
				onChange={onPasswordHandler}></Input>

			<Button type={'submit'}>Login</Button>
		</form>
	)
}

export default Login
// disabled={!formIsValid}
