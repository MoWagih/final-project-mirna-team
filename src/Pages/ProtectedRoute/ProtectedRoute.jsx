import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children , allowedRoles }) {
    const userData = localStorage.getItem("user");
  if (!userData) {
    return <Navigate to="/" replace />;
  }
  
  const user = JSON.parse(userData);
  const userRole = user.User_Role;

  if(!allowedRoles.includes(userRole)){
    return <Navigate to="/" replace />
  }

  return (
    <div>{children}</div>
  )
}
