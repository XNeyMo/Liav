import { React, useState } from 'react';

import useRegister from '../../hooks/useRegister';

const RegisterForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { Register, error } = useRegister();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await Register(email, password);
		console.log(error);
	}

	return (
		<div className='w-full flex flex-col gap-4'>
			<h1 className='text-center text-2xl font-bold leading-9 tracking-tight text-old-copper-700'>Create your Account</h1>

			<form className='space-y-2' onSubmit={handleSubmit}>
				<label htmlFor='email' className='block text-sm font-medium leading-6 text-gray'>Email address</label>
				<input className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-old-copper-700' type='email' id='email' name='email' onChange={(e) => setEmail(e.target.value)} required />

				<div className='flex justify-between gap-5'>
					<div>
						<label htmlFor='password' className='block text-sm font-medium leading-6 text-gray'>Password</label> 
						<input className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-old-copper-700' type='password' id='password' name='password' required />
					</div>

					<div>
						<label htmlFor='confirmPassword' className='text-right block text-sm font-medium leading-6 text-gray'>Confirm Password</label>
						<input className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray shadow-sm ring-1 ring-inset ring-gray placeholder:text-gray focus:ring-2 focus:ring-inset focus:ring-old-copper-700' type='password' id='confirmPassword' name='confirmPassword' onChange={(e) => setPassword(e.target.value)} required />
					</div>
				</div>

				<div className='h-5 w-full'></div>
				
				<button type='submit' className='flex w-full justify-center rounded-md bg-old-copper-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm'>Create</button>
			</form>
		</div>
	)
}

export default RegisterForm;
