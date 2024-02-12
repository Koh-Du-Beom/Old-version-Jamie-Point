import React from 'react';
import classes from './TopNavBarLayout.module.css'
import TopNavBar from '../../components/TopNavBar/TopNavBar';
import BottomInfo from '../../components/Footer/BottomInfo/BottomInfo';

const HomeLayout : React.FC<{children : React.ReactNode}> = ({ children }) => {
	return (
		<div className={classes.homeLayout}>
			<TopNavBar/>
			<div className={classes.content}>
				{children}
			</div>
			<BottomInfo/>
		</div>
	)
};

export default HomeLayout;

