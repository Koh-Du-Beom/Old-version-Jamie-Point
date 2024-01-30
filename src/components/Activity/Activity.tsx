/*eslint-disable*/
import { useEffect, useState } from "react";
import classes from "../../styles/FormStyles.module.css";
import ImageControler from "../ImageControler";
import ActivityDropDown from "./ActivityDropDown";
import ActivityType from "../../types/ActivityType.type";
import saveIcon from '../../assets/saveIcon.png';
import styled from "styled-components";
import axios from "axios";
import TierCalculator from "./TierCalculator";
import useUnSavedAlert from "../../hooks/useUnSavedAlert";

const AreaWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

interface ActivityProps {
	area: string;
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

	const [lastBlurTime, setLastBlurTime] = useState<number>(0);
	const [isValueChanged, setIsValueChanged] = useState<boolean>(false);

	const handleSaveButtonClick = async (index : number) => {
		if(!isValueChanged){
			alert('이미 저장된 정보입력입니다!');
			return;
		}
		setIsValueChanged(false);

		try{
			const formData = new FormData;
			formData.append('index', index.toString())
			formData.append('pageType', area);
			if (activityImg){
				formData.append('activityImg', activityImg);
			}
			if(program){
				formData.append('program', program);
			}
			if(type){
				formData.append('type', type);
			}else{
				formData.append('type', '');
			}
			if(topic){
				formData.append('topic', topic);
			}else{
				formData.append('topic', '');
			}
			if(point){ //point가 0일때 실행안되니 참고
				formData.append('point', point.toString());
			}
			formData.append('agency', agency);
			formData.append('date', date);
			formData.append('detail', detail);

			console.log(formData);
			

			for (let [key, value] of formData.entries()){
				console.log(key, value);
				
			}

			const response = await axios.post('http://localhost:8080/zs', formData, {
				headers: {
					'Content-Type' : 'multipart/form-data'
				}
			});
			
			// 정상적으로 저장됐으면 alert해주는 로직 짜면 좋을듯.
		}catch(error){
			console.log("Error : ", error);
			
		}
	};

	const handleBlur = () => {
		setLastBlurTime(Date.now());
	}

	useEffect(() => {
		if (lastBlurTime === 0 || !isValueChanged) return;

		const timer = setTimeout(async()=>{
			await handleSaveButtonClick(index); // 둘 다 비동기 함수지만 아래 코드가 먼저 실행될 수 있음. 그런 동작 막기위함
			setIsValueChanged(false);
		}, 10000);

		return () => clearTimeout(timer);
	}, [lastBlurTime, index, isValueChanged, handleSaveButtonClick])

	useUnSavedAlert(isValueChanged);

	const dropDowns : ActivityDropDownProps= {
		program : program,
		type : type,
		topic : topic,
		point : point,
	};


	const handleActivityImg = (newImage : File | null) => {
		setActivityImg(newImage);
		const updatedActivity: ActivityType = {
			...activitiesData,
			activityImg : newImage,
		};
		setIsValueChanged(true);
		onActivityChange(index, updatedActivity);
	}

	const handleAgency = (event : React.ChangeEvent<HTMLInputElement>) => {
		const newAgency = event.target.value;
		setAgency(newAgency);

		const updatedActivity : ActivityType = {
			...activitiesData,
			agency : newAgency,
		};
		setIsValueChanged(true);
		onActivityChange(index, updatedActivity);
	}

	const handleDate = (event : React.ChangeEvent<HTMLInputElement>) => {
		const newDate = event.target.value;
		setDate(newDate);

		const updatedActivity : ActivityType = {
			...activitiesData,
			date : newDate,
		};
		setIsValueChanged(true);
		onActivityChange(index, updatedActivity);
	}

	const handleDetail = (event : React.ChangeEvent<HTMLInputElement>) => {
		const newDetail = event.target.value;
		setDetail(newDetail);

		const updatedActivity : ActivityType = {
			...activitiesData,
			detail : newDetail,
		};
		setIsValueChanged(true);
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
		setIsValueChanged(true);
		onActivityChange(index, updatedActivity);
	}

	

	return (
		<div className={classes.container}>
			
			<div className={`${classes.end_double}`}>
				<AreaWrapper>
					<div className={classes.big_title}>{area}</div>
				</AreaWrapper>
				<div className={`${classes.wrapper} ${classes.double}`}>
					<button className={classes.button_wrapper} onClick={() => handleSaveButtonClick(index)}>
						<img src={saveIcon} alt='saveIcon'/>
					</button>
					<button className={`${classes.button_wrapper} ${classes.close_button}`} onClick={()=>onRemove(index)}>
					</button>
				</div>			
			</div>
			<hr/>
			
			<div className={classes.wrapper}>
				<div className={classes.big_title}>사진 입력</div>
				<ImageControler onImageChange={handleActivityImg} data={activitiesData.activityImg}/>
			</div>

			<div className={classes.wrapper}>
				<div className={classes.big_title}>활동 내역</div>
				<ActivityDropDown 
					selectedArea={area}
					onDropDownChange={handleDropDownChange}
					dropDownData={dropDowns}
				/>
				{program === '코딩 문제풀이' && type && <TierCalculator selectedType={type}/>}
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
							onBlur={handleBlur}
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