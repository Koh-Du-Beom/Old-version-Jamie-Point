/*eslint-disable*/
import MainLayout from "../layouts/MainLayout";
import Activity from "../components/Activity/Activity";
import { useParams } from "react-router-dom";
import axios from "axios";
import ActivityMock from "../mocks/Activity.mock";
import ActivityType from "../types/ActivityType.type";
import RightNavBar from "../components/RightNavBar";

const ActivityPage:React.FC = () => {
	
	//데이터를 전부다 받아오던지, area에 맞는 데이터만 받아올건지 고민 여기선 SW핵심역량 페이지만 받아온다가정

	return (
		<div>
			<div>뭔가 안내창같은거 띄우주면 좋을거같음</div>
			<RightNavBar/>
		</div>
		
	)
	//페이지 추가하는 버튼 기능구현하기 + 사진 제대로 전송되는지 확인
	
	//관찰이슈 : area가 제대로 들어가있지만, 렌더링이 올바르게 안되고있음.
}

export default ActivityPage;