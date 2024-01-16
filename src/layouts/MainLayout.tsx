import React from 'react';
import TopNavBar from '../components/TopNavBar';
import RightNavBar from '../components/RightNavBar';
import classes from '../styles/MainLayout.module.css';

const MainLayout: React.FC<{children : React.ReactNode}> = ({children}) => {
  return (
    <div className={classes.mainLayout}>    
      <TopNavBar/>
      <div className={classes.content}>
        {children}
      </div>
      <RightNavBar/>
    </div>
  )
}

export default MainLayout;