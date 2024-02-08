/*eslint-disable*/
import classes from '../../styles/components/Footer/BottomNavBar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../stores/redux/store';

interface BottomNavBarProps{
	openModal : () => void;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({openModal}) => {

	const userInfo = useSelector((state : RootState) => state.userInfo)
	const isAbleToDocument = () => {
		const swCoreCount = userInfo.swCoreInfo.activityCount;
		const swCooperationCount = userInfo.swCooperationInfo.activityCount;
		const swValueCount = userInfo.swValueInfo.activityCount;
		const swConvergenceCount = userInfo.swConvergenceInfo.activityCount;

		return swCoreCount && swCooperationCount && swValueCount && swConvergenceCount;
	}

	return (
		<div className={classes.navbar}>
			<div className={classes.wrapper}>
				<button className={classes.web_button}>web</button>
				<button 
					className={isAbleToDocument()? classes.send_button : classes.disabled_button} 
					onClick={isAbleToDocument() ? openModal : undefined} 
					disabled={!isAbleToDocument()}
				>
					문서화하기
				</button>
			</div>
		</div>
	)
};

export default BottomNavBar;