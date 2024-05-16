import { React } from 'react';

import Logo from '../../assets/icons/logo.png';

const GuestHeader = () => {
	return (
		<header className='px-10 py-1 fixed bg-white w-full'>
			<img className='h-14' src={Logo} alt="logo" />
		</header>
	)
}

export default GuestHeader;
