import MainLayout from "../layouts/MainLayout";
import Activity from "../components/Activity/Activity";
import { useParams } from "react-router-dom";
import AddActivityButton from "../components/AddActivityButton";
import { useState } from "react";


const ActivityPage:React.FC = () => {
	const {area} = useParams<{area?: string}>();
	const [activities, setActivities] = useState<JSX.Element[]>([
		<Activity key={0} area = {area}/>
	]);

	const addNewActivity = () => {
		setActivities([...activities, <Activity key={activities.length} area={area} />]);
	};

	return (
		<MainLayout>
			{activities}
			<AddActivityButton onClick={addNewActivity}/>
		</MainLayout>
	)
}

export default ActivityPage;