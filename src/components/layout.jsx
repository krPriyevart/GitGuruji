import React from 'react';
import Nav from './nav.jsx';
import Footer from './footer.jsx';
import Sidebar from './sidebar.jsx';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Nav />
      <div className="main-content bg-slate-700 w-full flex">
      <Sidebar />
        <div className="content w-10/12 bg-slate-600">
       
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
