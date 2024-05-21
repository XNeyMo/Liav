import { React, useState } from 'react';

import Modal from '../Modal';
import ProductForm from '../forms/ProductForm';

import useFetchProducts from '../../hooks/useFetchProducts.js';
import useSearch from '../../hooks/useSearch.js';

const InventoryManagement = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);

	const products = useFetchProducts();
	const { search, handleSearch, filteredItems } = useSearch(products, 'name');

	const openModal = (product) => {
		setSelectedProduct(product);
		setIsModalOpen(true);
	}

	const openCreateModal = () => {
		setSelectedProduct(null);
		setIsModalOpen(true);
	}

	const closeModal = () => {
		setSelectedProduct(null);
		setIsModalOpen(false);
	}

	return (
		<div className='max-h-[calc(100vh-3.25rem)] w-full p-10 flex flex-col justify-between'>
			<div className='flex h-auto justify-between items-center'>
				<h1 className='text-2xl font-semibold text-old-copper-700'>Inventory Management</h1>

				<div className='flex gap-10'>
					<form>
						<input
							type='text'
							placeholder='Search'
							className='bg-old-copper-100 px-4 py-1.5 rounded-xl placeholder:text-old-copper-500'
							value={search}
							onChange={handleSearch}
						/>
					</form>

					<button className='bg-old-copper-700 text-white font-semibold px-6 py-1.5 rounded-xl' onClick={openCreateModal}>Add Product</button>
				</div>
			</div>

			<table className='mt-10 w-full pb-10 block overflow-y-auto text-sm *:*:*:px-6 *:*:*:py-3'>
				<thead className='text-xs uppercase text-white bg-old-copper-700 sticky top-0'>
					<tr>
						<th className='text-left'>Id</th>
						<th className='text-left'>Name</th>
						<th className='text-left'>Price</th>
						<th className='text-left'>Stock</th>
						<th className='text-left'>Category</th>
						<th></th>
					</tr>
				</thead>

				<tbody className='max-w-[calc(100%-5rem)] *:border-b *:border-old-copper-700 *:*:whitespace-nowrap overflow-y-auto'>
					{filteredItems.map(product => (
						<tr key={product.id}>
							<td>{product.id}</td>
							<td>{product.name}</td>
							<td>{product.price}</td>
							<td>{product.stock}</td>
							<td>{product.category}</td>

							<td>
								<a href='#' className='font-bold text-old-copper-700 hover:text-old-copper-900' onClick={() => openModal(product)}>Edit</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<ProductForm product={selectedProduct} onClose={closeModal} />
			</Modal>
		</div>
	)
}

export default InventoryManagement;
