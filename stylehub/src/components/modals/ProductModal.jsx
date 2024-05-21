import { React } from 'react';

const ProductModal = ({ product, onClose, onAddToCart }) => {
	if (!product) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
			<div className="bg-white p-5 rounded-md shadow-md w-4/5 h-2/4 relative">
				<button onClick={onClose} className="absolute top-2 right-2 text-lg">&times;</button>

				<h2 className="text-2xl font-bold mb-4">{product.name}</h2>

				<div className='flex justify-between'>
					<img src={product.imgref[0]} alt={product.name} className="w-56 h-56 mb-4" />

					<div>
						<p className="text-lg mb-2">$ {product.price}</p>
						<p className="text-lg mb-2">Stock: {product.stock}</p>
						<button onClick={() => onAddToCart(product)} className="mt-2 px-4 py-2 bg-old-copper-700 text-white rounded-md">Agregar al Carrito</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductModal;
