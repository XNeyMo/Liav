import { React } from 'react';

const InventoryManagement = () => {
	return (
		<div className='max-h-[calc(100vh-3.25rem)] w-full p-10 flex flex-col justify-between'>
			<div className='flex h-auto justify-between items-center'>
				<h1 className='text-2xl font-semibold text-old-copper-700'>Inventory Management</h1>

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
						<th className='text-left'>Product</th>
						<th className='text-left'>Price</th>
						<th className='text-left'>Stock</th>
						<th className='text-left'>Provider</th>
						<th></th>
					</tr>
				</thead>

				<tbody className='*:border-b *:border-old-copper-700 *:*:whitespace-nowrap overflow-y-auto'>
					<tr>
						<td>Basic T-Shirt</td>
						<td>15.99</td>
						<td>120</td>
						<td>United Textiles</td>
						<td>
							<a href='#' className='font-bold text-old-copper-700 hover:text-old-copper-900'>Edit</a>
						</td>
					</tr>

					<tr>
						<td>Slim-Fit Jeans</td>
						<td>29.99</td>
						<td>80</td>
						<td>Fashion Denim</td>
						<td>
							<a href='#' className='font-bold text-old-copper-700 hover:text-old-copper-900'>Edit</a>
						</td>
					</tr>

					<tr>
						<td>Hooded Sweatshirt</td>
						<td>35.99</td>
						<td>50</td>
						<td>Urban Apparel</td>
						<td>
							<a href='#' className='font-bold text-old-copper-700 hover:text-old-copper-900'>Edit</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default InventoryManagement;
