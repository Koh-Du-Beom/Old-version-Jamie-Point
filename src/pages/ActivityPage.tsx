/*eslint-disable*/
import MainLayout from "../layouts/MainLayout";
import Activity from "../components/Activity/Activity";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ActivityAddBar from "../components/ActivityAddBar";


const ActivityPage:React.FC = () => {
	const {area} = useParams<{area?: string}>();

	return (
		<MainLayout>
			<Activity area={area}/>
		</MainLayout>
	)
	//페이지 추가하는 버튼 기능구현하기 + 사진 제대로 전송되는지 확인
}

export default ActivityPage;