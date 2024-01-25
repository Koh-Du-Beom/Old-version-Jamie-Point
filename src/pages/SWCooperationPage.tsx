/*eslint-disable*/
import MainLayout from "../layouts/MainLayout";
import Activity from "../components/Activity/Activity";
import { useParams } from "react-router-dom";
import axios from "axios";
import SWCooperationActivityMock from "../mocks/SWCooperationActivity.mock";
import ActivityType from "../types/ActivityType.type";

const SWCooperationPage : React.FC = () =>{
	const activitiesData : ActivityType[] = SWCooperationActivityMock;
	const area:string = 'SW산학협력·창업역량';
	
	return (
		<MainLayout>
			{
				activitiesData.map((item, index) => (
					<Activity key={index} area={area} activitiesData={item}/>
				))
			}
			
		</MainLayout>
	)
}

export default SWCooperationPage;