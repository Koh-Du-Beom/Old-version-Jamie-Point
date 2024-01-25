/*eslint-disable*/
import MainLayout from "../layouts/MainLayout";
import Activity from "../components/Activity/Activity";
import { useState } from "react";
import axios from "axios";
import SWCooperationActivityMock from "../mocks/SWCooperationActivity.mock";
import ActivityType from "../types/ActivityType.type";

const SWCooperationPage : React.FC = () =>{
	const [activitiesData, setActivitiesData] = useState<ActivityType[]>(SWCooperationActivityMock);
	const area:string = 'SW산학협력·창업역량';
	
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
			<button onClick={handlePlusButton}>+</button>
			{
				activitiesData.map((item, index) => (
					<Activity 
						key={index} 
						area={area} 
						activitiesData={item}
						onRemove={handleRemoveActivity}
						index={index}/>
				))
			}
			
		</MainLayout>
	)
}

export default SWCooperationPage;