import { React, useState, useEffect } from 'react';

import useUpdateCustomer from '../../hooks/update/useUpdateCustomer';

const ModifyCustomerForm = ({ customer, onClose }) => {
	const { updateCustomer, error } = useUpdateCustomer();

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
					type='text'
					step='address.street'
					name='Address Street'
					placeholder='Address Street'
					value={formData.address.street}
					onChange={handleChange}
					className='border p-2 rounded'
				/>

				<input
					type='text'
					step='address.city'
					name='Address City'
					placeholder='Address City'
					value={formData.address.city}
					onChange={handleChange}
					className='border p-2 rounded'
				/>
			</div>

			<div className='flex flex-col gap-4'>
				<input
					type='text'
					name='address.state'
					placeholder='Address State'
					value={formData.address.state}
					onChange={handleChange}
					className='border p-2 rounded'
				/>

				<input
					type='text'
					step='address.zip'
					name='Address Zip'
					placeholder='Address Zip'
					value={formData.address.zip}
					onChange={handleChange}
					className='border p-2 rounded'
				/>

				<input
					type='text'
					step='address.country'
					name='Address Country'
					placeholder='Address Country'
					value={formData.address.country}
					onChange={handleChange}
					className='border p-2 rounded'
				/>
			</div>

			{error && <p className='text-red-500'>{error}</p>}

			<button type='submit' className='bg-old-copper-700 text-white px-4 py-2 rounded'>
				Save
			</button>
		</form>
	)
}

export default ModifyCustomerForm;
