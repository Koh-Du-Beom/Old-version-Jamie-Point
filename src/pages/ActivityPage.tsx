/*eslint-disable*/
import MainLayout from "../layouts/MainLayout";
import Activity from "../components/Activity/Activity";
import { useParams } from "react-router-dom";
import ActivityBar from "../components/Activity/ActivityBar";

const ActivityPage:React.FC = () => {
	const {area} = useParams<{area?: string}>();

	return (
		<MainLayout>
			<Activity area={area}/>
			{area && <ActivityBar area={area}/>}
		</MainLayout>
	)
	//페이지 추가하는 버튼 기능구현하기 + 사진 제대로 전송되는지 확인
	
	//관찰이슈 : area가 제대로 들어가있지만, 
}

export default ActivityPage;