/*eslint-disable*/
import { useEffect, useState } from "react";
import classes from "../../styles/FormStyles.module.css";
import ImageControler from "../ImageControler";
import ActivityDropDown from "./ActivityDropDown";
import ActivityType from "../../types/ActivityType.type";

interface ActivityProps {
	area?: string;
	activitiesData : ActivityType;
	onRemove : (index : number) => void;
	onActivityChange : (index : number, updatedActivity : ActivityType) => void;
	index : number;
}

interface ActivityDropDownProps {
	program : string|null;
	type : string | null;
	topic : string | null;
	point : number | null;
}

//Activity 데이터가 area 별로 여러개 있을텐데, 이걸 index별로 어떻게 받아와볼지 고민.

const Activity : React.FC<ActivityProps> = ({area, activitiesData, onRemove, onActivityChange , index}) => {
	const [activityImg, setActivityImg] = useState<File|null>(null);
	const [program, setProgram] = useState<string | null>("");
	const [type, setType] = useState<string | null>("");
	const [topic, setTopic] = useState<string | null>("");
	const [point, setPoint] = useState<number | null>(null);
	
	const [agency, setAgency] = useState<string>("");
	const [date, setDate] = useState<string>("");
	const [detail, setDetail] = useState<string>("");

	const dropDowns = {
		program : program,
		type : type,
		topic : topic,
		point : point,
	}

	const handleActivityImg = (newImage : File | null) => {
		setActivityImg(newImage);

		const updatedActivity: ActivityType = {
			...activitiesData,
			activityImg : newImage,
		};

		onActivityChange(index, updatedActivity);
	}

	const handleAgency = (event : React.ChangeEvent<HTMLInputElement>) => {
		const newAgency = event.target.value;
		setAgency(newAgency);

		const updatedActivity : ActivityType = {
			...activitiesData,
			agency : newAgency,
		};

		onActivityChange(index, updatedActivity);
	}

	const handleDate = (event : React.ChangeEvent<HTMLInputElement>) => {
		const newDate = event.target.value;
		setDate(newDate);

		const updatedActivity : ActivityType = {
			...activitiesData,
			date : newDate,
		};

		onActivityChange(index, updatedActivity);
	}

	const handleDetail = (event : React.ChangeEvent<HTMLInputElement>) => {
		const newDetail = event.target.value;
		setDetail(newDetail);

		const updatedActivity : ActivityType = {
			...activitiesData,
			detail : newDetail,
		};

		onActivityChange(index, updatedActivity);
	}


	useEffect(() => {		
		setActivityImg(activitiesData.activityImg);
    setProgram(activitiesData.program)
		setType(activitiesData.type);
		setTopic(activitiesData.topic);
		setPoint(activitiesData.point);

		setAgency(activitiesData.agency);
		setDate(activitiesData.date);
		setDetail(activitiesData.detail);	
	}, [activitiesData]); // 페이지가 처음 렌더링 될때 실행

	const handleDropDownChange = (selectedData : ActivityDropDownProps) => {
		const {program, type, topic, point} = selectedData;
		setProgram(program);
		setType(type);
		setTopic(topic);
		setPoint(point);
		
		const updatedActivity: ActivityType = {
			...activitiesData,
			program: program,
			type: type,
			topic: topic,
			point: point,
		};

		onActivityChange(index, updatedActivity);
	}

	return (
		<div className={classes.container}>
			
			<div className={`${classes.button_wrapper}`} >
				<div className={classes.big_title}>{area}</div>
				<div>
					<button className={classes.close_button} onClick={()=>onRemove(index)}></button>
				</div>
			</div>
			
			<hr/>
			
			<div className={classes.wrapper}>
				<div className={classes.big_title}>사진 입력</div>
				<ImageControler onImageChange={handleActivityImg}/>
			</div>

			<div className={classes.wrapper}>
				<div className={classes.big_title}>활동 내역</div>
				<ActivityDropDown 
					selectedArea={area}
					onDropDownChange={handleDropDownChange}
					dropDownData={dropDowns}
				/>
				{point ? <div className={classes.small_title}>{`환산점수 : ${point}`}</div> : null}
			</div>
			
			<div className={classes.big_title}>활동 세부 사항 </div>
			<div className={`${classes.wrapper} ${classes.double}`}>
				<div className={classes.wrapper}>
					<div>
						<div className={classes.small_title}>취득기관</div>
						<input 
							className={classes.input}
							type='text'
							onChange={(e) =>handleAgency(e)}
							value={agency}
						/>
					</div>
				</div>
				
				<div className={classes.wrapper}>
					<div>
						<div className={classes.small_title}>취득일자</div>
						<input
							className={classes.input} 
							type='text'
							onChange={(e) => handleDate(e)}
							value={date}
						/>
					</div>
				</div>
			</div>

			<div className={classes.wrapper}>
				<div className={classes.small_title}>상세정보</div>
				<input 
					className={classes.input}
					type='text'
					onChange={(e) => handleDetail(e)}
					value={detail}
				/>
			</div>
		</div>
	)
}

export default Activity;