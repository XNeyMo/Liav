import { React } from 'react';

import AdminLogo from '../../assets/icons/adminlogo.png';

import UserLogo from '../../assets/icons/usermanagement.svg';
import InventoryLogo from '../../assets/icons/inventorymanagement.svg';
import SupplyChainLogo from '../../assets/icons/supplychainmanagement.svg';

import LogoutLogo from '../../assets/icons/logout.svg';

const Sidebar = ({ onPageChange, selectedPage }) => {
	const isSelected = (page) => {
		return selectedPage === page;
	}

	return (
		<aside className='bg-old-copper-700 h-screen px-4 py-5 w-1/4 flex flex-col items-center'>
			<img className='h-16' src={AdminLogo} alt="logo" />

			<ul className='flex pt-10 flex-col justify-between w-full items-start py-5 h-full text-old-copper-200'>
				<div className='flex flex-col w-full items-start gap-5 hover:*:bg-old-copper-900 hover:*:text-white *:ease-in-out *:duration-500 *:w-full *:h-10 *:rounded-md *:px-5 *:cursor-pointer *:flex *:gap-5 *:items-center'>
					<li onClick={() => onPageChange('userManagement')} className={`${isSelected('userManagement') ? 'bg-old-copper-900 text-white' : ''}`}>
						<i className='fa-solid fa-user text-xl' />
						<p>Users</p>
					</li>

					<li onClick={() => onPageChange('customerManagement')} className={`${isSelected('customerManagement') ? 'bg-old-copper-900 text-white' : ''}`}>
						<i className='fa-solid fa-users text-xl' />
						<p>Customers</p>
					</li>

					<li onClick={() => onPageChange('inventoryManagement')} className={`${isSelected('inventoryManagement') ? 'bg-old-copper-900 text-white' : ''}`}>
						<i className='fa-solid fa-boxes-stacked text-xl' />
						<p>Inventory</p>
					</li>

					<li onClick={() => onPageChange('supplyChainManagement')} className={`${isSelected('supplyChainManagement') ? 'bg-old-copper-900 text-white' : ''}`}>
						<i className='fa-solid fa-truck text-xl' />
						<p>Supply Chain</p>
					</li>
				</div>

				<div className='w-full'>
					<a href='/' className='flex gap-5 w-full hover:bg-old-copper-900 hover:text-white ease-in-out duration-500 h-10 rounded-md px-5 items-center'>
						<i className='fa-solid fa-right-from-bracket text-xl' />
						<p>Logout</p>
					</a>
				</div>
			</ul>
		</aside>
	)
}

export default Sidebar;
