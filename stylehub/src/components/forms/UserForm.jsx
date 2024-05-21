import { React, useState, useEffect } from 'react';

import useUpdateUser from '../../hooks/update/useUpdateUser';
import useDelete from '../../hooks/useDelete';

const UserForm = ({ user, onClose }) => {
	const { updateUser, error } = useUpdateUser();
	const { deleteEntity } = useDelete();

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

	const handleDelete = async () => {
		await deleteEntity('user', user.id);
		onClose();
	};

	return (
		<form onSubmit={handleSubmit} className='flex gap-10'>
			<div className='flex flex-col gap-4'>
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
			</div>

			<div className='flex flex-col gap-4 justify-between'>
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

				<button onClick={handleDelete} className='bg-old-copper-700 text-white px-4 py-2 rounded'>
					Delete
				</button>
			</div>

			{error && <p className='text-red-500'>{error}</p>}

			<button type='submit' className='bg-old-copper-700 text-white px-4 py-2 rounded'>
				Save
			</button>
		</form>
	)
}

export default UserForm;
