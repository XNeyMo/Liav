import { React } from 'react';

const SupplyChainManagement = () => {
	return (
		<div className='max-h-[calc(100vh-3.25rem)] w-full p-10 flex flex-col justify-between'>
			<div className='flex h-auto justify-between items-center'>
				<h1 className='text-2xl font-semibold text-old-copper-700'>Supply Chain Management</h1>

				<div className='flex gap-10'>
					<form>
						<input type='text' placeholder='Search' className='bg-old-copper-100 px-4 py-1.5 rounded-xl placeholder:text-old-copper-500' />
					</form>

					<button className='bg-old-copper-700 text-white font-semibold px-6 py-1.5 rounded-xl'>Add Product</button>
				</div>
			</div>

			<table className='mt-10 w-full pb-10 block overflow-y-auto text-sm *:*:*:px-6 *:*:*:py-3'>
				<thead className='text-xs uppercase text-white bg-old-copper-700 sticky top-0'>
					<tr>
						<th className='text-left'>Name</th>
						<th className='text-left'>Telephone</th>
						<th className='text-left'>Products</th>
						<th className='text-left'>Rating</th>
						<th></th>
					</tr>
				</thead>

				<tbody className='*:border-b *:border-old-copper-700 *:*:whitespace-nowrap overflow-y-auto'>
					<tr>
						<td>Fresh Produce Suppliers</td>
						<td>+1 555 123 4567</td>
						<td>10</td>
						<td>4.5</td>
						<td>
							<a href='#' className='font-bold text-old-copper-700 hover:text-old-copper-900'>Edit</a>
						</td>
					</tr>

					<tr>
						<td>Textile Wholesalers</td>
						<td>+1 555 987 6543</td>
						<td>15</td>
						<td>4.3</td>
						<td>
							<a href='#' className='font-bold text-old-copper-700 hover:text-old-copper-900'>Edit</a>
						</td>
					</tr>

					<tr>
						<td>Premium Cotton Producers</td>
						<td>+1 555 456 1098</td>
						<td>12</td>
						<td>3.5</td>
						<td>
							<a href='#' className='font-bold text-old-copper-700 hover:text-old-copper-900'>Edit</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default SupplyChainManagement;
