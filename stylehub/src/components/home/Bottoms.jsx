import { React, useState } from 'react';

import ProductModal from '../modals/ProductModal';

import useFetchProducts from '../../hooks/useFetchProducts.js';

const Bottoms = () => {
	const products = useFetchProducts('Bottoms');
	const [selectedProduct, setSelectedProduct] = useState(null);

	const handleProductClick = (product) => {
		setSelectedProduct(product);
	}

	const handleCloseModal = () => {
		setSelectedProduct(null);
	}

	const handleAddToCart = (product) => {
		handleCloseModal();
	}

	return (
		<section className='px-10'>
			<h1 className='text-5xl font-bold py-5 text-center'>TOPS</h1>

			<div className='flex gap-4'>
			        {products.length > 0 ? (
					products.map(product => (
						<div className='cursor-pointer' key={product.id} onClick={() => handleProductClick(product)}>
							<div className='w-[12rem]'>
								<img src={product.imgref[0]} alt={product.name} />
							</div>

							<div className='max-w-[12rem] pt-2 text-center text-xs font-bold'>
								<h2>{product.name}</h2>

								<div className='flex justify-between'>
									<p>$ {product.price}</p>
									<p>{product.stock} stock</p>
								</div>
							</div>
						</div>
					))
				) : (
					<p>No products found in the "Bottoms" category.</p>
				)}
			</div>

			{selectedProduct && (
				<ProductModal
					product={selectedProduct}
					onClose={handleCloseModal}
					onAddToCart={handleAddToCart}
				/>
			)}
		</section>
	)
}

export default Bottoms;
