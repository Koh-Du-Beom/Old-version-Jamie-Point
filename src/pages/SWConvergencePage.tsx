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