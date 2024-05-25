import { React, useState, useEffect } from 'react';
import axios from 'axios';

import { useAuth } from '../../hooks/useAuth';
import useUpdateProduct from '../../hooks/update/useUpdateProduct';

const Cart = () => {
	const { auth } = useAuth();
	const [cartItems, setCartItems] = useState([]);
	const [customer, setCustomer] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const { updateProduct, error: updateError } = useUpdateProduct();

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

	useEffect(() => {
		const fetchCustomerData = async () => {
			try {
				const response = await axios.get(`https://liavback.onrender.com/customer/${auth.user.email}`, {
					headers: {
						'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
					}
				});
				setCustomer(response.data);
			} catch (error) {
				console.error('Error fetching customer data:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchCustomerData();
	}, [auth.user.email]);

	useEffect(() => {
		const cart = JSON.parse(localStorage.getItem('cart')) || [];
		setCartItems(cart);
	}, []);

	const removeFromCart = (indexToRemove) => {
		const newCartItems = cartItems.filter((item, index) => index !== indexToRemove);
		setCartItems(newCartItems);
		localStorage.setItem('cart', JSON.stringify(newCartItems));
	};

	const clearCart = () => {
		setCartItems([]);
		localStorage.removeItem('cart');
	};

	if (!cartItems.length) {
        return (
			<main>
				<div className='p-20 flex items-center justify-center'>
					<h1 className='text-5xl font-bold'>Without Items in Cart</h1>
				</div>
			</main>
		);
	}

	const total = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);
	
	const handleCheckout = async () => {
		if (customer.credits < total) {
			alert('Insufficient credits');
			return;
		}

		try {
			formData.credits = customer.credits - total;
			await axios.put(`https://liavback.onrender.com/customer/${customer.id}`, formData, {
					headers: {
						'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
					}
				});

			for (const item of cartItems) {
                		const updatedStock = item.stock - 1; // Assuming each cart item reduces stock by 1
                		await updateProduct(item.id, { ...item, stock: updatedStock });
            		}
			
			clearCart();
			alert('Checkout successful');
		} catch (error) {
			console.error('Error during checkout:', error);
			alert('Checkout failed');
		}
	};

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	return (
		<section>
			<div className="p-20 flex justify-between gap-10">
				<div className='flex flex-col gap-5 w-8/12 overflow-auto'>
					{cartItems.map((item, index) => (
						<div key={index}>
							<div className='flex justify-between gap-10 items-center border-2 p-4 rounded-xl border-[#f0f0f0]'>
								<h1 className="text-xl">{item.name}</h1>
								<h2 className="text-xl font-semibold">{item.price}</h2>
								<button className='font-bold text-[#ff7272] hover:text-[#a73131]' onClick={() => removeFromCart(index)}>Delete</button>
							</div>
						</div>
					))}
				</div>

				<div className='w-4/12 text-center p-10'>
					<h1 className='text-xl'>Total Price</h1>
					<p className='text-5xl font-bold mt-5 mb-20'>{total} USD</p>

					<div className='flex justify-between'>
						<button className='bg-[#ff7272] hover:bg-[#a73131] text-white px-4 py-2 rounded-md font-bold' onClick={clearCart}>Clear Cart</button>
						<button className='bg-[#25D366] hover:bg-[#075E54] text-white px-4 py-2 rounded-md font-bold' onClick={handleCheckout}>Checkout</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Cart;
