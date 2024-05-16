import { React } from 'react';

const UserManagement = () => {
	return (
		<div className='max-h-[calc(100vh-3.25rem)] w-full p-10 flex flex-col justify-between'>
			<div className='flex h-auto justify-between items-center'>
				<h1 className='text-2xl font-semibold text-old-copper-700'>User Management</h1>

				<div className='flex gap-10'>
					<form>
						<input type='text' placeholder='Search' className='bg-old-copper-100 px-4 py-1.5 rounded-xl placeholder:text-old-copper-500' />
					</form>

					<button className='bg-old-copper-700 text-white font-semibold px-6 py-1.5 rounded-xl'>Add User</button>
				</div>
			</div>

			<table className='mt-10 w-full pb-10 block overflow-y-auto text-sm *:*:*:px-6 *:*:*:py-3'>
				<thead className='text-xs uppercase text-white bg-old-copper-700 sticky top-0'>
					<tr>
						<th className='text-left'>Username</th>
						<th className='text-left'>Email</th>
						<th className='text-left'>Password</th>
						<th className='text-left'>Credits</th>
						<th></th>
					</tr>
				</thead>

				<tbody className='*:border-b *:border-old-copper-700 *:*:whitespace-nowrap overflow-y-auto'>
					<tr>
						<td>XNeyMo</td>
						<td>xneymodev@gmail.com</td>
						<td>q1w2e3r4t5</td>
						<td>50000</td>
						<td>
							<a href='#' className='font-bold text-old-copper-700 hover:text-old-copper-900'>Edit</a>
						</td>
					</tr>

					<tr>
						<td>MichaelTaboada2003</td>
						<td>michaeltaboada@gmail.com</td>
						<td>p0o9i8u7</td>
						<td>20000</td>
						<td>
							<a href='#' className='font-bold text-old-copper-700 hover:text-old-copper-900'>Edit</a>
						</td>
					</tr>

					<tr>
						<td>DonadoM</td>
						<td>donadom@gmail.com</td>
						<td>qawsedrf</td>
						<td>110000</td>
						<td>
							<a href='#' className='font-bold text-old-copper-700 hover:text-old-copper-900'>Edit</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default UserManagement;
