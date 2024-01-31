/*eslint-disable*/
import MainLayout from "../layouts/MainLayout";
import Activity from "../components/Activity/Activity";
import { useState, useEffect } from "react";
import ActivityType from "../types/ActivityType.type";
import classes from '../styles/page/PageStyles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from "../stores/redux/store";
import { updateActivity, removeActivity, updateSWValueInfo, updateTotals } from "../stores/redux/userSlice";
import {v4 as uuidv4} from 'uuid'

const SWValuePage:React.FC = () => {
	const area:string = 'SW가치확산역량';
	const defaultActivity: ActivityType = {
		id: uuidv4(),
		pageType: area,
		activityImg: "",
		program: "",
		type: "",
		topic: "", 
		point: 0,
		agency: "",
		date: "",
		detail: "",
	};
	const [activitiesData, setActivitiesData] = useState<ActivityType[]>([defaultActivity]);

	const handlePlusButton = () => {
		const newActivity : ActivityType= {
			id : uuidv4(),
			pageType : area,
			activityImg : "",
			program: "",
			type : "",
			topic : "", 
			point : 0,
			agency : "",
			date : "",
			detail : "",
		}
		setActivitiesData([newActivity, ...activitiesData]);
	}


	const dispatch = useDispatch<AppDispatch>();
	const userInfo = useSelector((state : RootState) => state.userInfo);
	const [isSaved, setIsSaved] = useState<boolean>(false);

	useEffect(()=> {
		console.log('userInfo : ', userInfo);
		
	}, [userInfo]); //redux의 상태변경은 비동기적으로 이루어짐.

	useEffect(()=>{
		const filteredActivities = userInfo.activities.filter(activity => activity.pageType === area);
		if (filteredActivities.length === 0){
			setActivitiesData([defaultActivity]);
		}else{
			setActivitiesData(filteredActivities);
		}
		calculateSWValueInfo();
	}, [userInfo.activities, area])

	//현재 상태를 하위컴포넌트의 handleActivityChange를 통해서 상위컴포넌트의 activityData를 업데이트해주는 로직을
	//선택했는데, 이거 때문에 최신값이 반영이 안되는 문제점이 있었음,
	const handleActivityChange = (activityId : string, updatedActivity : ActivityType) => {
		setActivitiesData(activitiesData => {
			const updatedActivitiesData = activitiesData.map(activity =>
				activity.id === activityId ? updatedActivity : activity
			);
			// 업데이트된 activitiesData로 상태를 설정한 직후에 리덕스 스토어를 업데이트합니다.
			updatedActivitiesData.forEach(activity => {
				dispatch(updateActivity({id: activity.id, activity}))
			});
			return updatedActivitiesData;
		});

		//원래 잘못된 코드
		// const updatedActivitiesData = activitiesData.map(activity =>
    //   activity.id === activityId ? updatedActivity : activity
    // );
    // setActivitiesData(updatedActivitiesData);
	};

	const handleRemoveActivity = (activityId : string) => {
    setActivitiesData(activitiesData.filter(activity => activity.id !== activityId));
		dispatch(removeActivity({ id : activityId}))
	};

	const calculateSWValueInfo = () => {
		const totalPoint = activitiesData.reduce((acc, activity) => acc + (activity.point || 0), 0);
		const activityCount = activitiesData.length;

		dispatch(updateSWValueInfo({ activityCount, totalPoint }));
		dispatch(updateTotals());
	}

	return (
		<MainLayout>	
			<div className={classes.button_container}>
				<button className={classes.button} onClick={handlePlusButton}>+</button>
			</div>
			
			{activitiesData.map((activity) => (
				<Activity 
					key={activity.id} 
					id={activity.id}
					area={area} 
					activitiesData={activity}
					onRemove={handleRemoveActivity}
					onActivityChange={handleActivityChange}
				/>
			))}
		</MainLayout>
	)
};

export default SWValuePage;