import ActivityType from "../../types/ActivityType.type";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ActivityListProps {
	area?: string;
	activitiesData : ActivityType[]
}

const ActivityList:React.FC<ActivityListProps> = ({area, activitiesData}) => {
	
	const navigate = useNavigate();
	const [activityInfos, setActivityInfos] = useState<ActivityType[]>(activitiesData);

	const addNewActivity = () => {
		const newActivity: ActivityType = {
			pageType : area || 'undefined', //현재 페이지에서 가지고 있는 area정보를 렌더링하게 수정
			activityImg : new File([], ''),
			program : null,
			type : null,
			topic : null,
			point : null,
			agency : "",
			date : "",
			detail : "",
		};

		setActivityInfos([...activityInfos, newActivity]);
	};

	const goToActivity = (index : number) => {
		const activity = activityInfos[index];
		navigate(`/activity/${activity.pageType}/${index}`);
	}

	return (
		<div>
			<div>
				{activityInfos.map((activity, index) => (
					<div key={index}>
						<button onClick={() => goToActivity(index)}>
							{activity.pageType}
							
							<br/>
							{activity.program || `활동${index + 1}`}
							<br/>
							{activity.type || `주제${index + 1}`}
						</button>
					</div>
				))}
			</div>
			<div>
				<button onClick={addNewActivity}>클릭하면 활동하나 추가하게</button>
			</div>


		</div>
	)
};

export default ActivityList;