import React from 'react';

import GuestHeader from '../components/headers/GuestHeader';

import useAuthForm from '../hooks/useAuthForm';
import LoginForm from '../components/forms/LoginForm';
import RegisterForm from '../components/forms/RegisterForm';

const AuthPage = () => {
	const { isLogin, toggleAuthForm } = useAuthForm();

	return (
		<main className='h-screen bg-welcome bg-cover'>
			<GuestHeader />
			
			<section className='items-center h-full pt-[4rem] flex justify-evenly'>
				<div className='text-white w-2/5 h-4/5 flex flex-col justify-center gap-10'>
					<h1 className='text-5xl'><span className='text-old-copper-700 font-bold'>LIAV</span> Makes You Look Your Best</h1>
					<p className='text-2xl'>Get the best clothes from the best brands</p>
				</div>

				<div className='bg-white w-1/3 h-4/5 rounded-2xl flex flex-col items-center p-10 justify-between'>
					{isLogin ? <LoginForm /> : <RegisterForm />}

					<button onClick={toggleAuthForm} className='text-gray underline hover:text-old-copper-700'>{isLogin ? 'Don\'t have an account?' : 'Already have an account?'}</button>
				</div>
			</section>
		</main>
	)
}

export default AuthPage;
