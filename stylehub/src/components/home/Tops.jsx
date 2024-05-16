import { React } from 'react';

import useFetchProducts from '../../hooks/useFetchProducts.js';

const Tops = () => {
	const products = useFetchProducts('Tops');

	return (
		<section className='px-10'>
			<h1 className='text-5xl font-bold py-5 text-center'>TOPS</h1>

			<div className='flex gap-2'>
			        {products.length > 0 ? (
					products.map(product => (
						<a href='#' key={product.id}>
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
						</a>
					))
				) : (
					<p>No products found in the "Tops" category.</p>
				)}
			</div>
		</section>
	)
}

export default Tops;
