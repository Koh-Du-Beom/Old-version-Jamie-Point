/*eslint-disable*/
import MainLayout from "../layouts/MainLayout";
import Activity from "../components/Activity/Activity";
import { useParams } from "react-router-dom";
import ActivityList from "../components/Activity/ActivityList";
import axios from "axios";
import ActivityMock from "../mocks/Activity.mock";
import Activities from "../types/Activities.type";

const ActivityPage:React.FC = () => {
	const {area} = useParams<{area?: string}>();
	const activitiesData : Activities[] = ActivityMock;
	
	//데이터를 전부다 받아오던지, area에 맞는 데이터만 받아올건지 고민 여기선 SW핵심역량 페이지만 받아온다가정

	return (
		<MainLayout>
			<Activity area={area}/>
			{area && <ActivityList area={area} activitiesData={activitiesData}/>}
		</MainLayout>
	)
	//페이지 추가하는 버튼 기능구현하기 + 사진 제대로 전송되는지 확인
	
	//관찰이슈 : area가 제대로 들어가있지만, 
}

export default ActivityPage;