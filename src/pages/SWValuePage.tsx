/*eslint-disable*/
import MainLayout from "../layouts/MainLayout";
import Activity from "../components/Activity/Activity";
import { useState, useEffect } from "react";
import axios from "axios";
import SWValueActivityMock from "../mocks/SWValueActivity.mock";
import ActivityType from "../types/ActivityType.type";
import classes from '../styles/page/PageStyles.module.css';

const SWValuePage:React.FC = () => {
	const area:string = 'SW가치확산역량';
	const defaultActivity : ActivityType = {
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
	const [activitiesData, setActivitiesData] = useState<ActivityType[]>([defaultActivity]);
	

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

	const handleSaveButton = async() => {
		try{
			const formData = new FormData();
			activitiesData.forEach((activity, index) => {
				formData.append(`activities[${index}][pageType]`, activity.pageType || '');
				if (activity.activityImg && activity.activityImg instanceof File) {
					formData.append(`activities[${index}][activityImg]`, activity.activityImg);
				}
				formData.append(`activities[${index}][program]`, activity.program || '');
				formData.append(`activities[${index}][type]`, activity.type || '');
				formData.append(`activities[${index}][topic]`, activity.topic || '');
				formData.append(`activities[${index}][point]`, activity.point ? activity.point.toString() : '');
				formData.append(`activities[${index}][agency]`, activity.agency);
				formData.append(`activities[${index}][date]`, activity.date);
				formData.append(`activities[${index}][detail]`, activity.detail);
			});

			const response = await axios.post('http://localhost:8080/zs', formData, {
				headers : {
					'Content-Type' : 'multipart/form-data'
				}
			});
			console.log(response);
			
		}catch(error){
			console.error("Error : ", error);
			
		}
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
				<button className={classes.button} onClick={handleSaveButton}>저장</button>
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

export default SWValuePage;