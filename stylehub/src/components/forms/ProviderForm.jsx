import { React, useState, useEffect } from 'react';

import useUpdateProvider from '../../hooks/update/useUpdateProvider';

const ProviderForm = ({ provider, onClose }) => {
	const { updateProvider, error } = useUpdateProvider();

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		address: {
			street: '',
			city: '',
			state: '',
			zip: '',
			country: '',
		},
		products: [],
	});

	useEffect(() => {
		if (provider) {
			setFormData(provider);
		}
	}, [provider]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (provider && provider.id) {
			await updateProvider(provider.id, formData);
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
				value={formData.name}
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
				type='text'
				name='phone'
				placeholder='Phone'
				value={formData.phone}
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

export default ProviderForm;
