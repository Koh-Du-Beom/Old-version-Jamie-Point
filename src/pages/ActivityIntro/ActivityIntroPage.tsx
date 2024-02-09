/*eslint-disable*/
import RightNavBar from "../../components/RightNavBar/RightNavBar";
import TopNavBarLayout from '../../layouts/TopNavBarLayout/TopNavBarLayout';
import classes from './ActivityIntroPage.module.css'

const ActivityIntroPage:React.FC = () => {
	
	return (
		<TopNavBarLayout>
			<div className={classes.container}>
				<div className={classes.title_container}>
					<div className={classes.big_title}>How To Use</div>
					<div className={classes.sub_title}>Our Project?</div>
				</div>
				<div className={classes.content_container}>
					<div className={classes.content_wrapper}>1</div>
					<div className={classes.content_wrapper}>2</div>
					<div className={classes.content_wrapper}>3</div>
				</div>
			</div>
			
		</TopNavBarLayout>
	)
}

export default ActivityIntroPage;