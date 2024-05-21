import { React } from 'react';

const ProductModal = ({ product, onClose, onAddToCart }) => {
	if (!product) return null;

	return (
		<div className="fixed inset-0">
			<div className="bg-white p-5 rounded-md shadow-md w-screen h-screen relative">
				<div className='flex justify-between items-center'>
					<h2 className="text-2xl font-bold mb-4">{product.name}</h2>
					
					<button onClick={onClose}>
						<i class="fa-solid fa-xmark"></i>
					</button>
				</div>

				<div className='flex justify-evenly'>
					<div className='flex gap-10'>
						<img src={product.imgref[0]} alt={product.name} className="w-56" />

						<div className='flex flex-col justify-evenly'>
							<img src={product.imgref[1]} alt={product.name} className="w-24" />
							<img src={product.imgref[2]} alt={product.name} className="w-24" />
						</div>
					</div>

					<div className='flex flex-col justify-evenly'>
						<div>
							<h3 className="text-4xl font-semibold mb-2">{product.category}</h3>
							<p className="text-lg mb-2">$ {product.price}</p>
							<p className="text-lg mb-2">Stock: {product.stock}</p>
						</div>

						<button
							onClick={() => onAddToCart(product)}
							className="mt-2 px-4 py-2 bg-old-copper-700 text-white rounded-md">

							Agregar al Carrito
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductModal;
