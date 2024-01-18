import classes from '../styles/UserInfoForm.module.css';
import ImageControler from './ImageControler';

const UserInfoForm : React.FC = () => {
	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				<div className={classes.big_title}>내 정보</div>
			</div>

			<hr/>
			<div className={classes.big_title}>기본 정보</div>
			<div className={classes.wrapper}>
				<div className={classes.small_title}>이름</div>
				<input 
					className={classes.input} type='text'/>
			</div>

			<div className={`${classes.wrapper} ${classes.double}`}>
				<div className={classes.wrapper}>
					<div>
						<div className={classes.small_title}>학년</div>
						<input className={classes.input} type='text'/>
					</div>
				</div>
				<div className={classes.wrapper}>
					<div>
						<div className={classes.small_title}>학번</div>
						<input className={classes.input} type='text'/>
					</div>
				</div>
			</div>

			<hr/>
			<div className={classes.big_title}>통장 및 신분증사본</div>
			<div className={classes.wrapper}>
				<div>
					<div className={classes.small_title}>통장사본</div>
					<ImageControler/>
				</div>
			</div>
			
			<div className={classes.wrapper}>
				<div>
					<div className={classes.small_title}>신분증사본</div>
					<ImageControler/>
				</div>
			</div>



		</div>
	)
}

export default UserInfoForm;