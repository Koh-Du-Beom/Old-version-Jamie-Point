/*eslint-disable*/
import MainLayout from "../layouts/MainLayout";
import Activity from "../components/Activity/Activity";
import SWConvergenceActivityMock from "../mocks/SWConvergenceActivity.mock";
import axios from "axios";
import { useState, useEffect } from "react";
import ActivityType from "../types/ActivityType.type";
import classes from '../styles/page/PageStyles.module.css';

const SWConvergencePage:React.FC = () => {
	const [activitiesData, setActivitiesData] = useState<ActivityType[]>(SWConvergenceActivityMock);
	const area:string = 'SW융합역량';
	
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
	
	const handleActivityChange = (index : number, updatedActivity : ActivityType) => {
		const updatedActivitesData = activitiesData.map((item, idx) => 
			idx === index ? updatedActivity : item
		);
		setActivitiesData(updatedActivitesData);
	}

	useEffect(()=> {
		console.log(activitiesData);
		
	}, [activitiesData])

	//저장 버튼을 만들거임. 그리고 이 저장버튼이 눌렸는지 안눌렸는지를 state로 관리해보면
	// 어떨까 싶음. 5초마다 이 페이지 내용을 자동으로 백엔드로 보내주는 로직. 이때, 저장버튼이
	//눌리지 않았다는 것이 확인되면 이 로직이 발동하고, 이미 눌려있다면 굳이 발동되지 않는다. 이렇게 구현해보자.

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
				onActivityChange={handleActivityChange}
				index={index}/>
			))}
		</MainLayout>
	)
};

export default SWConvergencePage;