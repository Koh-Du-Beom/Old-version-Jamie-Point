import MainLayout from "../layouts/MainLayout";
import Activity from "../components/Activity/Activity";
import { useParams } from "react-router-dom";


const ActivityPage:React.FC = () => {
	const {area} = useParams<{area?: string}>();
	return (
		<MainLayout>
			<Activity area={area}/>
		</MainLayout>
	)
}

export default ActivityPage;