/*eslint-disable*/
import MainLayout from "../layouts/MainLayout";
import Activity from "../components/Activity/Activity";
import { useParams } from "react-router-dom";
import ActivityList from "../components/Activity/ActivityList";
import axios from "axios";
import ActivityMock from "../mocks/Activity.mock";
import ActivityType from "../types/ActivityType.type";

const SWValuePage:React.FC = () => {
	const activitiesData : ActivityType[] = ActivityMock;
	const area:string = 'SW가치확산';
	
	return (
		<MainLayout>
			<Activity area={area} activitiesData={activitiesData}/>
			<ActivityList area={area} activitiesData={activitiesData}/>
		</MainLayout>
	)
};

export default SWValuePage;