import { React, useState, useEffect } from 'react';

import useUpdateUser from '../../hooks/update/useUpdateUser';

const UserForm = ({ user, onClose }) => {
	const { updateUser, error } = useUpdateUser();

	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		phone: '',
		admin: false,
	});

	useEffect(() => {
		if (user) {
			setFormData(user);
		}
	}, [user]);

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (user && user.id) {
			await updateUser(user.id, formData.username, formData.email, formData.password, formData.phone, formData.admin);
			onClose();
		} else {
			console.error('User ID is required to update user');
		}
	};

	return (
		<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
			<input
				type='text'
				name='username'
				placeholder='Username'
				value={formData.username}
				onChange={handleChange}
				className='border p-2 rounded'
			/>

			<input
				type='email'
				name='email'
				placeholder='Email'
				value={formData.email}
				onChange={handleChange}
				className='border p-2 rounded'
			/>

			<input
				type='password'
				name='password'
				placeholder='Password'
				value={formData.password}
				onChange={handleChange}
				className='border p-2 rounded'
			/>

			<input
				type='text'
				name='phone'
				placeholder='Phone'
				value={formData.phone}
				onChange={handleChange}
				className='border p-2 rounded'
			/>

			<label className='flex items-center'>
				<input
					type='checkbox'
					name='admin'
					checked={formData.admin}
					onChange={handleChange}
					className='mr-2'
				/>
				
				Admin
			</label>

			{error && <p className='text-red-500'>{error}</p>}

			<button type='submit' className='bg-old-copper-700 text-white px-4 py-2 rounded'>
				Save
			</button>
		</form>
	)
}

export default UserForm;
