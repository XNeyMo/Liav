import { React, useState, useEffect } from 'react';

import useUpdateProvider from '../../hooks/update/useUpdateProvider';
import useDelete from '../../hooks/useDelete';

const ProviderForm = ({ provider, onClose }) => {
	const { updateProvider, error } = useUpdateProvider();
	const { deleteEntity } = useDelete();

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
		products_id: [],
	});

	useEffect(() => {
		if (provider) {
			setFormData(provider);
		}
	}, [provider]);

	const handleChange = (e) => {
		const { name, value } = e.target;

		if (name.includes('address.')) {
			const addressField = name.split('.')[1];

			setFormData((prevState) => ({
				...prevState,
				address: {
					...prevState.address,
					[addressField]: value,
				},
			}));
		} else {
			setFormData((prevState) => ({
				...prevState,
				[name]: value,
			}));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await updateProvider(provider?.id, formData);
		onClose();
	};

	const handleDelete = async () => {
		await deleteEntity('provider', provider.id);
		onClose();
	};

	return (
		<form onSubmit={handleSubmit} className='flex gap-10'>
			<div className='flex flex-col gap-4'>
				<input
					type='text'
					name='name'
					placeholder='Name'
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

				<input
					type='text'
					name='address.street'
					placeholder='Street'
					value={formData.address.street}
					onChange={handleChange}
					className='border p-2 rounded'
				/>
			</div>

			<div className='flex flex-col gap-4'>
				<input
					type='text'
					name='address.city'
					placeholder='City'
					value={formData.address.city}
					onChange={handleChange}
					className='border p-2 rounded'
				/>

				<input
					type='text'
					name='address.state'
					placeholder='State'
					value={formData.address.state}
					onChange={handleChange}
					className='border p-2 rounded'
				/>

				<input
					type='text'
					name='address.zip'
					placeholder='ZIP'
					value={formData.address.zip}
					onChange={handleChange}
					className='border p-2 rounded'
				/>

				<input
					type='text'
					name='address.country'
					placeholder='Country'
					value={formData.address.country}
					onChange={handleChange}
					className='border p-2 rounded'
				/>
			</div>

			{error && <p className='text-red-500'>{error}</p>}

			<button onClick={handleDelete} className='bg-old-copper-700 text-white px-4 py-2 rounded'>
				Delete
			</button>

			<button type='submit' className='bg-old-copper-700 text-white px-4 py-2 rounded'>
				Save
			</button>
		</form>
	)
}

export default ProviderForm;
