/*eslint-disable*/
import classes from '../../styles/components/Footer/BottomNavBar.module.css';

interface BottomNavBarProps{
	openModal : () => void;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({openModal}) => {

	return (
		<div className={classes.navbar}>
			<div className={classes.wrapper}>
				<button className={classes.web_button}>web</button>
				<button className={classes.send_button} onClick={openModal}>문서화하기</button>
			</div>
		</div>
	)
};

export default BottomNavBar;