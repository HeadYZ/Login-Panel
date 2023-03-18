import React, { useRef, useImperativeHandle } from 'react'
import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
	const inputRef = useRef()

	const activate = () => {
		inputRef.current.focus()
	}

	useImperativeHandle(ref, () => {
		return {
			activate: activate,
		}
	})

	return (
		<div className={`${classes.form__box} ${props.isValid === false ? classes.valid : ''}`}>
			<label className={classes.form__label} htmlFor={props.id}>
				{props.label}
			</label>
			<input
				ref={inputRef}
				className={classes.form__input}
				id={props.id}
				type={props.type}
				onChange={props.onChange}></input>
		</div>
	)
})

export default Input
