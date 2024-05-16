import { React } from 'react';

import AdminLogo from '../../assets/icons/adminlogo.png';
import UserLogo from '../../assets/icons/user.svg';

const AdminHeader = () => {
	return (
		<header className='px-10 py-3 fixed bg-white w-4/5 flex justify-end gap-10 shadow-md'>
			<h1 className='text-xl font-bold text-old-copper-700'>Admin</h1>
			<img className='h-7' src={UserLogo} alt='user' />
		</header>
	)
}

export default AdminHeader;
