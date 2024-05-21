import { React } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ requiredAdmin }) => {
	const { auth } = useAuth();
	const location = useLocation();

	console.log("verify:", { auth, requiredAdmin });
	if (!auth.isAuthenticated) {
		console.log("redirect");
		return <Navigate to="/auth" state={{ from: location }}/>;
	}

	if (requiredAdmin && !auth.isAdmin) {
		console.log("customer");
		return <Navigate to="/" />;
	}

	return <Outlet />;
}

export default ProtectedRoute;
