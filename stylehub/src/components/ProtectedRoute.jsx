import { React } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
	let auth = {'token': true}

	return auth.token ? <Outlet /> : <Navigate to="/auth" />;
	
}

export default ProtectedRoute;
