import { useEffect, useState } from "react";
import classes from "../../styles/FormStyles.module.css";
import ImageControler from "../ImageControler";
import ActivityDropDown from "./ActivityDropDown";
import useAutoSave from "../../hooks/useAutoSave";

interface ActivityProps {
	area?: string
}


const Activity : React.FC<ActivityProps> = ({area}) => {
	const [activityImg, setActivityImg] = useState<File|null>(null);

	const handleActivityImg = (file : File | null) => {
		setActivityImg(file);
	}

	const formData = [
		{
			activityImg : activityImg,

		}
		
	]

	useAutoSave(formData);

	useEffect(()=> {
		console.log(area);
		
	})

	return (
		<div className={classes.container}>
			
			<div className={classes.big_title}>{area}</div>
			<hr/>
			
			<div className={classes.wrapper}>
				<div className={classes.big_title}>사진 입력</div>
				<ImageControler onImageChange={handleActivityImg}/>
			</div>

			<div className={classes.wrapper}>
				<div className={classes.big_title}>활동 내역</div>
				<ActivityDropDown selectedArea={area}/>
			</div>
			
			<div className={classes.big_title}>활동 세부 사항 </div>
			<div className={`${classes.wrapper} ${classes.double}`}>
				<div className={classes.wrapper}>
					<div>
						<div className={classes.small_title}>취득기관</div>
						<input 
							className={classes.input}
							type='text'
							
						/>
					</div>
				</div>
				
				<div className={classes.wrapper}>
					<div>
						<div className={classes.small_title}>취득일자</div>
						<input
							className={classes.input} 
							type='text'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Activity;