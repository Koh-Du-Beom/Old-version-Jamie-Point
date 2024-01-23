import { useEffect, useState } from "react";
import classes from "../../styles/FormStyles.module.css";
import ImageControler from "../ImageControler";
import ActivityDropDown from "./ActivityDropDown";
import useAutoSave from "../../hooks/useAutoSave";
import ActivityType from "../../types/ActivityType.type";
import { useParams } from "react-router-dom";
interface ActivityProps {
	area?: string;
	activitiesData : ActivityType[];
}

//Activity 데이터가 area 별로 여러개 있을텐데, 이걸 index별로 어떻게 받아와볼지 고민.

const Activity : React.FC<ActivityProps> = ({area, activitiesData}) => {
	const dataIndex : string | undefined = useParams().activityId;
	

	const [activityImg, setActivityImg] = useState<File|null>(null);
	const [program, setProgram] = useState<string | null>("");
	const [type, setType] = useState<string | null>("");
	const [topic, setTopic] = useState<string | null>("");
	const [point, setPoint] = useState<number | null>(null);
	
	const [agency, setAgency] = useState<string>("");
	const [date, setDate] = useState<string>("");
	const [detail, setDetail] = useState<string>("");
	
	

	const handleActivityImg = (file : File | null) => {
		setActivityImg(file);
	}

	const handleAgency = (event : React.ChangeEvent<HTMLInputElement>) => {
		setAgency(event.target.value);
	}

	const handleDate = (event : React.ChangeEvent<HTMLInputElement>) => {
		setDate(event.target.value);
	}

	const handleDetail = (event : React.ChangeEvent<HTMLInputElement>) => {
		setDetail(event.target.value);
	}

	const formData : ActivityType = 
		{
			pageType : area,
			activityImg : activityImg,
			program: program,
			type : type,
			topic : topic, 
			point : point,
			agency : agency,
			date : date,
			detail : detail,
	}
		

	useAutoSave(formData);

	useEffect(()=>{
		if(dataIndex){
			const index = Number(dataIndex);
			const myData = activitiesData[index]; // 인덱스에 맞게 추출한 데이터
			console.log(index, myData);
			
			setActivityImg(myData.activityImg);
			setProgram(myData.program);
			setType(myData.type);
			setTopic(myData.topic);
			setPoint(myData.point);
			setAgency(myData.agency);
			setDate(myData.date);
			setDetail(myData.detail);
		}
	}, [dataIndex])

	useEffect(()=> {
		setActivityImg(null);
		setProgram(null);
		setType(null);
		setTopic(null);
		setPoint(null);
		setAgency("");
		setDate("");
		setDetail("");
	}, [area])

	const handleDropDownChange = (selectedData : {
		selectedProgram: string | null;
		selectedType : string | null;
		selectedTopic : string | null;
		selectedPoint : number | null;
	}) => {
		const {selectedProgram, selectedType, selectedTopic, selectedPoint} = selectedData;
		setProgram(selectedProgram);
		setType(selectedType);
		setTopic(selectedTopic);
		setPoint(selectedPoint);
		
	}


	return (
		<div className={classes.container}>
			
			<div className={classes.big_title}>{area}</div>
			<hr/>
			
			<div className={classes.wrapper}>
				<div className={classes.big_title}>사진 입력</div>
				<ImageControler onImageChange={handleActivityImg}/>
			</div>

			<div className={classes.wrapper}>
				<div className={classes.big_title}>활동 내역</div>
				<ActivityDropDown 
					selectedArea={area}
					onDropDownChange={handleDropDownChange}/>
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
							onChange={handleAgency}
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
							onChange={handleDate}
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
					onChange={handleDetail}
					value={detail}
				/>
			</div>
		</div>
	)
}

export default Activity;