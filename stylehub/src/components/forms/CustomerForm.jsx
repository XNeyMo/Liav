import { React, useState, useEffect } from 'react';

import useUpdateCustomer from '../../hooks/update/useUpdateCustomer';

const CustomerForm = ({ customer, onClose }) => {
	const { updateCustomer, error } = useUpdateCustomer();

	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		phone: '',
		credits: 0,
	});

	useEffect(() => {
		if (customer) {
			setFormData(customer);
		}
	}, [customer]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: name === 'credits' ? parseFloat(value) : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (customer && customer.id) {
			await updateCustomer(customer.id, formData.username, formData.email, formData.password, formData.phone, formData.credits);
			onClose();
		} else {
			console.error('Customer ID is required to update user');
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

			<input
				type='number'
				step='0.01'
				name='credits'
				placeholder='Credits'
				value={formData.credits}
				onChange={handleChange}
				className='border p-2 rounded'
			/>

			{error && <p className='text-red-500'>{error}</p>}

			<button type='submit' className='bg-old-copper-700 text-white px-4 py-2 rounded'>
				Save
			</button>
		</form>
	)
}

export default CustomerForm;
