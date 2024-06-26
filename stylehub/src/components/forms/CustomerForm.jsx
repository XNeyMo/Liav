import { React, useState, useEffect } from 'react';

import useUpdateCustomer from '../../hooks/update/useUpdateCustomer';
import useDelete from '../../hooks/useDelete';

const CustomerForm = ({ customer, onClose }) => {
	const { updateCustomer, error } = useUpdateCustomer();
	const { deleteEntity } = useDelete();

	const [formData, setFormData] = useState({
		user_id: '',
		username: '',
		email: '',
		password: '',
		phone: '',
		admin: false,
		credits: 0,
		address: {
			street: '',
			city: '',
			state: '',
			zip: '',
			country: '',
		}
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
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (customer && customer.id) {
			await updateCustomer(customer.id, formData);
			onClose();
		} else {
			console.error('Customer ID is required to update user');
		}
	};

	const handleDelete = async () => {
		await deleteEntity('customer', customer.id);
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

			<div className='flex flex-col gap-4'>
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

export default CustomerForm;
