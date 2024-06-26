import { React } from 'react';

import AdminHeader from '../components/headers/AdminHeader';

import useAdminPage from '../hooks/useAdminPage';
import Sidebar from '../components/admin/Sidebar';
import UserManagement from '../components/admin/UserManagement';
import CustomerManagement from '../components/admin/CustomerManagement';
import InventoryManagement from '../components/admin/InventoryManagement';
import SupplyChainManagement from '../components/admin/SupplyChainManagement';

const AdminPage = () => {
	const { selectedPage, changePage } = useAdminPage();
	
	const renderPage = () => {
		switch (selectedPage) {
			case 'userManagement':
				return <UserManagement />;
			case 'customerManagement':
				return <CustomerManagement />;
			case 'inventoryManagement':
				return <InventoryManagement />;
			case 'supplyChainManagement':
				return <SupplyChainManagement />;
			default:
				return <UserManagement />;
		}
	};

	return (
		<main className='flex'>
			<Sidebar onPageChange={changePage} selectedPage={selectedPage} />
			
			<section className='w-3/4 h-full'>
				<AdminHeader />

				<div className='pt-[3.25rem] max-h-[calc(100vh-3.25rem)]'>
					{renderPage()}
				</div>
			</section>
			
		</main>
	)
}

export default AdminPage;
