import React, {useState} from 'react';
import TopNavBar from '../components/TopNavBar';
import RightNavBar from '../components/RightNavBar';
import classes from '../styles/layouts/MainLayout.module.css';
import BottomNavBar from '../components/Footer/BottomNavBar';
import BottomInfo from '../components/Footer/BottomInfo';
import FinalCheckModal from '../components/FinalCheckModal';


const MainLayout: React.FC<{children : React.ReactNode}> = ({children}) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

  return (
    <div className={classes.mainLayout}>    
      <TopNavBar/>
      <div className={classes.content}>
				<div className={classes.childrenWrapper}>{children}</div>
				<div className={classes.rightNavBarWrapper}>
					<RightNavBar/>
					
				</div>
				{ isModalOpen ? <FinalCheckModal onClose={closeModal}/> : null }
				
      </div>
			
			<BottomNavBar openModal={openModal}/>
			<BottomInfo/>
			
			
    </div>
  )
}

export default MainLayout;