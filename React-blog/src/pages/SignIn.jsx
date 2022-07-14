import React from 'react';
import {useState, useEffect} from 'react'
import { FaSignInAlt } from 'react-icons/fa';

function SignIn() {
	const [formData, setFormData] = useState({
		email: '',
		password1: '',
	})

	
	const {email, password1} = formData

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value
		}))
	}

	const onSubmit = (e) => {
		e.preventDafault()
	}
	return (
		<>
			<section className='heading'>
				<h1> 
					<FaSignInAlt/> SignIn
				</h1>
				<p>Login and start blogging</p>
				<section className='form'>
				 <form onSubmit={onSubmit}>
					<div className='form-group'>
						<input
						type='email'
						className='form-control'
						id='email'
						name='email'
						value={email}
						placeholder='Enter your email'
						onChange={onChange}
						/>
					</div>
					<div className='form-group'>
						<input
						type='password'
						className='form-control'
						id='password'
						name='password'
						value={password1}
						placeholder='Enter password'
						onChange={onChange}
						/>
					</div>
					<div className='form-group'>
						<button type='submit' className='btn btn-block'>
						Submit
						</button>
					</div>
				 </form>
      			</section>
			</section>
		</>
	);
}

export default SignIn;
