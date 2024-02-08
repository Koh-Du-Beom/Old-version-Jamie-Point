
import BottomInfo from "../components/Footer/BottomInfo";
import TopNavBar from "../components/TopNavBar";
import classes from '../styles/layouts/UserInfoLayout.module.css'
import BottomNavBar from "../components/Footer/BottomNavBar";
import FinalCheckModal from "../components/FinalCheckModal";
import { useState } from "react";

const UserInfoLayout : React.FC <{children : React.ReactNode}> = ({children}) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);
	return( 
		<div className={classes.userInfoLayout}>
			<TopNavBar/>
			<div className={classes.content}>
				{children}
				{ isModalOpen ? <FinalCheckModal onClose={closeModal}/> : null }
			</div>
			<BottomNavBar openModal={openModal}/>
			<BottomInfo/>
		</div>
	)
};

export default UserInfoLayout;