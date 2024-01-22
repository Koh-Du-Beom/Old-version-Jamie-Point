import React from 'react';
import TopNavBar from '../components/TopNavBar';
import RightNavBar from '../components/RightNavBar';
import classes from '../styles/layouts/MainLayout.module.css';

const MainLayout: React.FC<{children : React.ReactNode}> = ({children}) => {

  return (
    <div className={classes.mainLayout}>    
      <TopNavBar/>
      <div className={classes.content}>
				<div className={classes.childrenWrapper}>{children}</div>
				<div className={classes.rightNavBarWrapper}>
					<RightNavBar/>
					
				</div>
      </div>
      
    </div>
  )
}

export default MainLayout;