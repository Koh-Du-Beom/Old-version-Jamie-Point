import React from 'react';
import classes from '../styles/layouts/HomeLayout.module.css'
import TopNavBar from '../components/TopNavBar';

const HomeLayout : React.FC<{children : React.ReactNode}> = ({ children }) => {
	return (
		<div className={classes.homeLayout}>
			<TopNavBar/>
			<div className={classes.content}>
				{children}
			</div>
		</div>
	)
};

export default HomeLayout;

