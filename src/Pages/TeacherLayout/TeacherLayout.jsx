import React, { useEffect, useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export default function TeacherLayout() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  return (
    <div className="flex bg-blue-950 h-[100vh] overflow-hidden">
      <Sidebar user={user} />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
}
