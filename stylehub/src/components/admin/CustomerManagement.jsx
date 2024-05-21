import { React, useState } from 'react';

import Modal from '../Modal';
import CustomerForm from '../forms/CustomerForm'

import useFetchCustomers from '../../hooks/useFetchCustomers';
import useSearch from '../../hooks/useSearch';

const CustomerManagement = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedCustomer, setSelectedCustomer] = useState(null);

	const customers = useFetchCustomers();
	const { search, handleSearch, filteredItems } = useSearch(customers, 'email');

	const openModal = (customer) => {
		setSelectedCustomer(customer);
		setIsModalOpen(true);
	}

	const closeModal = () => {
		setSelectedCustomer(null);
		setIsModalOpen(false);
	}

	return (
		<div className='max-h-[calc(100vh-3.25rem)] w-full p-10 flex flex-col justify-between'>
			<div className='flex h-auto justify-between items-center'>
				<h1 className='text-2xl font-semibold text-old-copper-700'>Customer Management</h1>

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
				</div>
			</div>

			<table className='mt-10 w-full pb-10 block overflow-y-auto text-sm *:*:*:px-6 *:*:*:py-3'>
				<thead className='text-xs uppercase text-white bg-old-copper-700 sticky top-0'>
					<tr>
						<th className='text-left'>Username</th>
						<th className='text-left'>Email</th>
						<th className='text-left'>Password</th>
						<th className='text-left'>Phone</th>
						<th className='text-left'>Credits</th>
						<th></th>
					</tr>
				</thead>

				<tbody className='*:border-b *:border-old-copper-700 *:*:whitespace-nowrap overflow-y-auto'>
					{filteredItems.map(customer => (
						<tr key={customer.id}>
							<td>{customer.username}</td>
							<td>{customer.email}</td>
							<td>{customer.password}</td>
							<td>{customer.phone}</td>
							<td>{customer.credits}</td>

							<td>
								<a href='#' className='font-bold text-old-copper-700 hover:text-old-copper-900' onClick={() => openModal(customer)}>Edit</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<CustomerForm customer={selectedCustomer} onClose={closeModal} />
			</Modal>
		</div>
	)
}

export default CustomerManagement;
