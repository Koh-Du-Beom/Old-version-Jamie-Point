/*eslint-disable*/
import { useEffect, useState } from "react";
import classes from "../../styles/FormStyles.module.css";
import ImageControler from "../ImageControler";
import ActivityDropDown from "./ActivityDropDown";
import ActivityType from "../../types/ActivityType.type";
import saveIcon from '../../assets/saveIcon.png';
import styled from "styled-components";
import TierCalculator from "./TierCalculator";
import useUnSavedAlert from "../../hooks/useUnSavedAlert";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../stores/redux/store';
import { updateActivity } from '../../stores/redux/userSlice';


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


const Activity : React.FC<ActivityProps> = ({area, activitiesData, onRemove, onActivityChange , index}) => {
	
	const [activity] = useState<File|null>(null);
	const [activityImg, setActivityImg] = useState<string|null>(null);
	const [program, setProgram] = useState<string | null>("");
	const [type, setType] = useState<string | null>("");
	const [topic, setTopic] = useState<string | null>("");
	const [point, setPoint] = useState<number | null>(null);
	
	const [agency, setAgency] = useState<string>("");
	const [date, setDate] = useState<string>("");
	const [detail, setDetail] = useState<string>("");

	const [lastBlurTime, setLastBlurTime] = useState<number>(0);
	const [isValueChanged, setIsValueChanged] = useState<boolean>(false);

	const handleBlur = () => {
		setLastBlurTime(Date.now());
	}

	useUnSavedAlert(isValueChanged);

	const dropDowns : ActivityDropDownProps= {
		program : program,
		type : type,
		topic : topic,
		point : point,
	};


	const handleActivityImg = (newImage: File | null) => {
		if (newImage) {
			convertToBase64(newImage, (base64String) => {
				setActivityImg(base64String);
				const updatedActivity: ActivityType = {
					...activitiesData,
					activityImg: base64String,
				};
				onActivityChange(index, updatedActivity);
			});
			setIsValueChanged(true);
		} else {
			setActivityImg(null);
			const updatedActivity: ActivityType = {
				...activitiesData,
				activityImg: null,
			};
			onActivityChange(index, updatedActivity);
		}
	};
	
	const convertToBase64 = (file : File, callback: (base64String : string) => void) => {
		const reader = new FileReader();
		reader.onload = () => {
			callback(reader.result as string);
		};
		reader.readAsDataURL(file); 
	}//fileReader 알아보기
	

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
		handleBlur();
		onActivityChange(index, updatedActivity);
	}

	return (
		<div className={classes.container}>
			
			<div className={`${classes.end_double}`}>
				<AreaWrapper>
					<div className={classes.big_title}>{area}</div>
				</AreaWrapper>
				<div className={`${classes.wrapper} ${classes.double}`}>
					<button className={`${classes.button_wrapper} ${classes.close_button}`} onClick={()=>onRemove(index)}>
					</button>
				</div>			
			</div>
			<hr/>
			
			<div className={classes.wrapper}>
				<div className={classes.big_title}>사진 입력</div>
				<ImageControler onImageChange={handleActivityImg} data={activityImg}/>
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