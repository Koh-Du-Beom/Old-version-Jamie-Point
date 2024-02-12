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
					<div className={classes.content_wrapper}>
						<div className={classes.content_title}>1</div>
						<div className={classes.content}>개인정보 입력 안내</div>
					</div>
					<div className={classes.content_wrapper}>
						<div className={classes.content_title}>2</div>
						<div className={classes.content}>활동입력 안내</div>
					</div>
					<div className={classes.content_wrapper}>
						<div className={classes.content_title}>3</div>
						<div className={classes.content}>문서화 안내</div>
					</div>
					
				</div>
			</div>
			
		</TopNavBarLayout>
	)
}

//지금 각자 다른 시간에 나오는거로 되어있는데, 스크롤 내릴 때 점점 선명하게 보이는 식으로 구현하기

export default ActivityIntroPage;