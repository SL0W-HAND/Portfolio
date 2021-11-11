import React from 'react';
import Navbar from '@components/Navbar/Navbar';

//import Footer from '@components/Footer/Footer'

const Layout = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
