import { React } from 'react';

const CreditCard = ({ customer }) => {
	return (
		<div className='w-[400px] h-[200px] rounded-xl p-5 text-white flex flex-col justify-between bg-old-copper-900'>
			<h1 className='text-xl font-bold'>LIAV Company</h1>

			<div>
				<div>

				</div>

				<div>
					<h2 className='text-lg font-bold'>Credits</h2>
					<p>{customer.credits}</p>
				</div>
			</div>
		</div>
	)
}

export default CreditCard;
