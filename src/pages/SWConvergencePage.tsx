/*eslint-disable*/
import MainLayout from "../layouts/MainLayout";
import Activity from "../components/Activity/Activity";
import SWConvergenceActivityMock from "../mocks/SWConvergenceActivity.mock";
import axios from "axios";
import ActivityType from "../types/ActivityType.type";

const SWConvergencePage:React.FC = () => {
	const activitiesData : ActivityType[] = SWConvergenceActivityMock; 
	const area:string = 'SW융합역량';
	
	return (
		<MainLayout>
			{activitiesData.map((item, index) => (
				<Activity key={index} area={area} activitiesData={item}/>
			))}
		</MainLayout>
	)
};

export default SWConvergencePage;