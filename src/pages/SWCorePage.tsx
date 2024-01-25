/*eslint-disable*/
import MainLayout from "../layouts/MainLayout";
import Activity from "../components/Activity/Activity";
import SWCoreActivityMock from "../mocks/SWCoreActivity.mock";
import ActivityType from "../types/ActivityType.type";
import { useState } from "react";
import classes from '../styles/page/PageStyles.module.css';

const SWCorePage:React.FC = () => {
	
	const [activitiesData, setActivitiesData] = useState<ActivityType[]>(SWCoreActivityMock);
	//백엔드에서 받아온 데이터로 대체될 예정임. issue 1 : 백엔드에서 pageType에 따라서 받아오는 문서를 다르게 할 수 있을지
	const area:string = 'SW핵심역량';
	

	const handlePlusButton = () => {
		const newActivity : ActivityType= {
			pageType : area,
			activityImg : null,
			program: null,
			type : null,
			topic : null, 
			point : null,
			agency : "",
			date : "",
			detail : "",
		}
		setActivitiesData([newActivity, ...activitiesData]);
	}

	const handleRemoveActivity = (index : number) => {
		const newActivitiesData = activitiesData.filter((_, idx) => idx !== index);
		setActivitiesData(newActivitiesData);
	}

	return (
		<MainLayout>	
			<div className={classes.button_container}>
				<button className={classes.button} onClick={handlePlusButton}>+</button>
			</div>
			
			{activitiesData.map((item, index) => (
				<Activity 
				key={index} 
				area={area} 
				activitiesData={item}
				onRemove={handleRemoveActivity}
				index={index}/>
			))}
		</MainLayout>
	)
};

export default SWCorePage;