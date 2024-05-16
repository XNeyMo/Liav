import { React } from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, user, ...rest }) => {
	return (
		<Route
			{...rest}
			element={
				user.admin ? <Element userType='admin' user={user} /> : <Element userType="user" user={user} />
			}
		/>
	)
}

export default ProtectedRoute;
