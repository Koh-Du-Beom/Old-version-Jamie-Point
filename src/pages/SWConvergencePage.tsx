/*eslint-disable*/
import MainLayout from "../layouts/MainLayout";
import Activity from "../components/Activity/Activity";
import ActivityList from "../components/Activity/ActivityList";
import axios from "axios";
import ActivityMock from "../mocks/Activity.mock";
import ActivityType from "../types/ActivityType.type";

const SWConvergencePage:React.FC = () => {
	const activitiesData : ActivityType[] = ActivityMock; 
	const area:string = 'SW융합';
	
	return (
		<MainLayout>
			<Activity area={area} activitiesData={activitiesData}/>
			<ActivityList area={area} activitiesData={activitiesData}/>
		</MainLayout>
	)
};

export default SWConvergencePage;