import { React, useState, useEffect } from 'react';
import axios from 'axios';

import Modal from '../Modal';
import ModifyCustomerFrom from '../forms/ModifyCustomerForm';
import CreditCard from '../CreditCard';

import { useAuth } from '../../hooks/useAuth';

const User = () => {
	const { auth } = useAuth();
	const [customer, setCustomer] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchCustomerData = async () => {
			try {
				const response = await axios.get(`https://liavback.onrender.com/customer/${auth.user.email}`);
				setCustomer(response.data);
			} catch (error) {
				console.error('Error fetching customer data:', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchCustomerData();
	}, [auth.user.email]);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (customer) => {
		setIsModalOpen(true);
	}

	const closeModal = () => {
		setIsModalOpen(false);
	}

	if (isLoading) {
		return <h1>Loading...</h1>
	}

	return (
		<section className='p-10 flex justify-between items-center h-full'>
			<div>
				<h1 className='text-6xl pb-10'>Welcome <span className='font-bold text-old-copper-700'>{customer.username}</span></h1>
				
				<p className='text-xl'>We hope you are having a good time</p>
				<p className='text-xl'>
					Remember that at
					<span className='font-bold text-old-copper-700 text-4xl uppercase'>  Liav  </span> 
					you are fashionable
				</p>

				<button 
					className='bg-old-copper-700 hover:bg-old-copper-900 ease-in-out transition-[0.5s] font-bold text-white px-5 py-2 rounded-lg mt-10'
					onClick={() => openModal(customer)}
				>Config Account</button>
			</div>

			<CreditCard customer={customer} />

			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<ModifyCustomerFrom customer={customer} onClose={closeModal}/>
			</Modal>
		</section>
	)
}

export default User;
