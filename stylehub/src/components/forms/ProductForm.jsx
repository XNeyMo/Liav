import { React, useState, useEffect } from 'react';

import useUpdateProduct from '../../hooks/update/useUpdateProduct';
import useDelete from '../../hooks/useDelete';

const ProductForm = ({ product, onClose }) => {
	const { updateProduct, error } = useUpdateProduct();
	const { deleteEntity } = useDelete();

	const [formData, setFormData] = useState({
		provider_id: '',
		name: '',
		price: 0,
		stock: 0,
		category: '',
		imgref: ['', '', ''],
	});

	useEffect(() => {
		if (product) {
			setFormData({
				...product,
				imgref: product.imgref || ['', '', ''],
			});
		}
	}, [product]);

	const handleChange = (e) => {
		const { name, value } = e.target;

		if (name.startsWith('imgref')) {
			const index = parseInt(name.split(' ')[1], 10) - 1;

			setFormData((prevState) => {
				const newImgref = [...prevState.imgref];
				newImgref[index] = value;
				return { ...prevState, imgref: newImgref };
			});
		} else {
			setFormData((prevState) => ({
				...prevState,
				[name]: name === 'price' ? parseFloat(value) : value,
			}));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await updateProduct(product?.id, formData);
		onClose();
	};

	const handleDelete = async () => {
		await deleteEntity('product', product.id);
		onClose();
	};

	return (
		<form onSubmit={handleSubmit} className='flex gap-10'>
			<div className='flex flex-col gap-4'>
				<input
					type='text'
					name='provider_id'
					placeholder='Provider ID'
					value={formData.provider_id}
					onChange={handleChange}
					className='border p-2 rounded'
				/>

				<input
					type='text'
					name='name'
					placeholder='Name'
					value={formData.name}
					onChange={handleChange}
					className='border p-2 rounded'
				/>

				<input
					type='number'
					step='0.01'
					name='price'
					placeholder='Price'
					value={formData.price}
					onChange={handleChange}
					className='border p-2 rounded'
				/>

				<input
					type='number'
					step='1'
					name='stock'
					placeholder='Stock'
					value={formData.stock}
					onChange={handleChange}
					className='border p-2 rounded'
				/>
			</div>

			<div className='flex flex-col gap-4'>
				<input
					type='text'
					name='category'
					placeholder='Category'
					value={formData.category}
					onChange={handleChange}
					className='border p-2 rounded'
				/>

				<input
					type='text'
					name='imgref 1'
					placeholder='Image Reference 1'
					value={formData.imgref[0]}
					onChange={handleChange}
					className='border p-2 rounded'
				/>

				<input
					type='text'
					name='imgref 2'
					placeholder='Image Reference 2'
					value={formData.imgref[1]}
					onChange={handleChange}
					className='border p-2 rounded'
				/>

				<input
					type='text'
					name='imgref 3'
					placeholder='Image Reference 3'
					value={formData.imgref[2]}
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

export default ProductForm;
