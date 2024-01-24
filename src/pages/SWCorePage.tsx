/*eslint-disable*/
import MainLayout from "../layouts/MainLayout";
import Activity from "../components/Activity/Activity";
import { useParams } from "react-router-dom";
import axios from "axios";
import ActivityMock from "../mocks/Activity.mock";
import ActivityType from "../types/ActivityType.type";

const SWCorePage:React.FC = () => {
	const activitiesData : ActivityType[] = ActivityMock; 
	//백엔드에서 받아온 데이터로 대체될 예정임. issue 1 : 백엔드에서 pageType에 따라서 받아오는 문서를 다르게 할 수 있을지
	const area:string = 'SW핵심역량';
	
	return (
		<MainLayout>
			{activitiesData.map((item, index) => (
				<Activity key={index} area={area} activitiesData={item}/>
			))}
		</MainLayout>
	)
};

export default SWCorePage;