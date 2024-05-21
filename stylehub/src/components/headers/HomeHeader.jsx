import { React } from 'react';

import Logo from '../../assets/icons/logo.png';

const HomeHeader = ({ onPageChange, selectedPage }) => {
	return (
		<header className='px-10 py-1 fixed bg-white w-full flex justify-between items-center *:flex *:gap-5 *:items-center *:*:cursor-pointer'>
			<img className='h-14' src={Logo} alt="logo" />

			<ul>
				<li onClick={() => onPageChange('tops')}>Tops</li>
				<li onClick={() => onPageChange('bottoms')}>Bottoms</li>
				<li onClick={() => onPageChange('footwears')}>Footwears</li>
				<li onClick={() => onPageChange('accessories')}>Accessories</li>
			</ul>

			<ul>
				<li onClick={() => onPageChange('user')}><i className='fas fa-user'></i></li>
				<li onClick={() => onPageChange('cart')}><i className='fas fa-shopping-cart'></i></li>
			</ul>
		</header>
	)
}

export default HomeHeader;
