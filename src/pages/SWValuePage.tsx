/*eslint-disable*/
import MainLayout from "../layouts/MainLayout";
import Activity from "../components/Activity/Activity";
import { useParams } from "react-router-dom";
import axios from "axios";
import SWValueActivityMock from "../mocks/SWValueActivity.mock";
import ActivityType from "../types/ActivityType.type";

const SWValuePage:React.FC = () => {
	const activitiesData : ActivityType[] = SWValueActivityMock;
	const area:string = 'SW가치확산역량';
	
	return (
		<MainLayout>
			{activitiesData.map((item, index) => (
				<Activity key={index} area={area} activitiesData={item}/>
			))}
		</MainLayout>
	)
};

export default SWValuePage;