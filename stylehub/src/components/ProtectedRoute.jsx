import { React } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ requiredAdmin }) => {
	const { auth } = useAuth();
	const location = useLocation();

	if (!auth.isAuthenticated) {
		return <Navigate to="/auth" state={{ from: location }}/>;
	}

	if (requiredAdmin && !auth.isAdmin) {
		return <Navigate to="/" />;
	}

	return <Outlet />;
}

export default ProtectedRoute;
