import { React } from 'react';

import HomeHeader from '../components/headers/HomeHeader';

import Tops from '../components/home/Tops';
import Bottoms from '../components/home/Bottoms';
import Footwears from '../components/home/Footwears';
import Accessories from '../components/home/Accessories';

import User from '../components/home/User';
import Cart from '../components/home/Cart';

import useHomePage from '../hooks/useHomePage';

const HomePage = () => {
	const { selectedPage, changePage } = useHomePage();
	
	const renderPage = () => {
		switch (selectedPage) {
			case 'tops':
				return <Tops />;
			case 'bottoms':
				return <Bottoms />;
			case 'footwears':
				return <Footwears />;
			case 'accessories':
				return <Accessories />;
			case 'user':
				return <User />;
			case 'cart':
				return <Cart />;
			default:
				return <Tops />;
		}
	};

	return (
		<main>
			<HomeHeader onPageChange={changePage} selectedPage={selectedPage} />

			<div className='pt-16 h-[calc(100vh-4rem)]'>
				{renderPage()}
			</div>
		</main>
	)
}

export default HomePage;
