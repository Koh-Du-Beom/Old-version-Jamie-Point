import React from "react";
import { useNavigate } from "react-router-dom";

const ActivityAddBar:React.FC = () => {
	const navigate = useNavigate();

	return (
		<div>
			<div>
				활동1 이름 - 활동정보띄우기
			</div>
			<div>
				활동2 이름 - 활동정보 띄우기
			</div>
			<div>
				<button>클릭하면 활동하나 추가하게</button>
			</div>


		</div>
	)
};

export default ActivityAddBar;