import { React, useState } from 'react';

import Modal from '../Modal';
import UserForm from '../forms/UserForm';

import useFetchUsers from '../../hooks/useFetchUsers';
import useSearch from '../../hooks/useSearch';

const UserManagement = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);

	const users = useFetchUsers();
	const { search, handleSearch, filteredItems } = useSearch(users, 'email');

	const openModal = (user) => {
		setSelectedUser(user);
		setIsModalOpen(true);
	}

	const closeModal = () => {
		setSelectedUser(null);
		setIsModalOpen(false);
	}

	return (
		<div className='max-h-[calc(100vh-3.25rem)] w-full p-10 flex flex-col justify-between'>
			<div className='flex h-auto justify-between items-center'>
				<h1 className='text-2xl font-semibold text-old-copper-700'>User Management</h1>

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
						<th className='text-left'>Admin?</th>
						<th></th>
					</tr>
				</thead>

				<tbody className='*:border-b *:border-old-copper-700 *:*:whitespace-nowrap overflow-y-auto'>
					{filteredItems.map(user => (
						<tr key={user.id}>
							<td>{user.username}</td>
							<td>{user.email}</td>
							<td>{user.password}</td>
							<td>{user.phone}</td>
							<td>{user.admin ? 'True' : 'False'}</td>

							<td>
								<div
									className='cursor-pointer font-bold text-old-copper-700 hover:text-old-copper-900'
									onClick={() => openModal(user)}
								>Edit</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<UserForm user={selectedUser} onClose={closeModal} />
			</Modal>
		</div>
	)
}

export default UserManagement;
