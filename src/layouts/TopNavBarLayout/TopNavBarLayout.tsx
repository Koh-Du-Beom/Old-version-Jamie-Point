import React from 'react';
import classes from './TopNavBarLayout.module.css'
import TopNavBar from '../../components/TopNavBar/TopNavBar';

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

