import React from 'react'
import styles from './CSS/LoginSignUp.module.scss'


export const LoginSignUp = () => {
	return (
		<div className={styles.loginSignUp}>
			<div className={styles.container}>
				<h1>Sign Up</h1>
				<div className={styles.fields}>
					<input type="text" placeholder='Your Name'/>
					<input type="email" placeholder='Email Adress'/>
					<input type="password" placeholder='Password'/>
				</div>
				<button type='button'>Continue</button>
				<p className={styles.login}>Already have an account?</p> <span>Login here</span>
				<div className={styles.agree}>
					<input type="checkbox" name='' id=''/>
					<p>By continuing, i agree to the terms of use & privacy policy.</p>
				</div>
			</div>
		</div>
	)
}
