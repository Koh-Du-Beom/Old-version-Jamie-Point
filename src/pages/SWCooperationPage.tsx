/*eslint-disable*/
import MainLayout from "../layouts/MainLayout";
import Activity from "../components/Activity/Activity";
import { useParams } from "react-router-dom";
import axios from "axios";
import ActivityMock from "../mocks/Activity.mock";
import ActivityType from "../types/ActivityType.type";

const SWCooperationPage : React.FC = () =>{
	const activitiesData : ActivityType[] = ActivityMock;
	const area:string = 'SW산학협력·창업역량';
	
	return (
		<MainLayout>
			{/* <Activity area={area} activitiesData={activitiesData}/> */}
			아무데이터
		</MainLayout>
	)
}

export default SWCooperationPage;