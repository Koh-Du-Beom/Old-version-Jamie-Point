/*eslint-disable*/
import classes from '../../styles/FormStyles.module.css';
import ImageControler from '../ImageControler';
import { useState } from 'react';
import axios from 'axios';
import UserInfoType from '../../types/UserInfoType.type';
import saveIcon from '../../assets/saveIcon.png'
import { useEffect } from 'react';
import useUnSavedAlert from '../../hooks/useUnSavedAlert';

const UserInfo : React.FC = () => {
	const [name, setName] = useState<string>('');
	const [grade, setGrade] = useState<string>('');
	const [major, setMajor] = useState<string>(''); //전공
	const [studentNumber, setStudentNumber] = useState<string>('');
	const [phoneNumber, setPhoneNumber] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [bankBookImg, setBankBookImg] = useState<File|null>(null);
	const [bankAccount, setBankAccount] = useState<string>('');//계좌번호
	const [bankName, setBankName] = useState<string>(''); // 은행명
	const [idCardImg, setIdCardImg] = useState<File|null>(null);
  const [signImg, setSignImg] = useState<File|null>(null); // 사인사진

	const [lastBlurTime, setLastBlurTime] = useState<number>(0);
	const [isValueChanged, setIsValueChanged] = useState<boolean>(false);

	const handleSaveButtonClick = async () => {
		// if(!isValueChanged){
		// 	alert('이미 저장된 정보입력입니다!');
		// 	return;
		// }
		// setIsValueChanged(false);

		try{
			const formData = new FormData();
			formData.append('name', name);
			formData.append('grade', grade);
			formData.append('major', major);
			formData.append('studentNumber', studentNumber);
			formData.append('phoneNumber', phoneNumber);
			formData.append('email', email);
			formData.append('bankAccount', bankAccount);
			formData.append('bankName', bankName);
			if (bankBookImg) {
				formData.append('bankBookImg', bankBookImg);
			}
			if (idCardImg) {
				formData.append('idCardImg', idCardImg);
			}
			if (signImg) {
				formData.append('signImg', signImg);
			}

			for (let [key, value] of formData.entries()){
				console.log(key, value);
			}

			const response = await axios.post('http://localhost:8080/zs', formData, {
				headers: {
					'Content-Type' : 'multipart/form-data'
				}
			});
			
		}catch(error){
			console.error("Error : ", error);
			
		}
	
  };

	const handleBlur = () => {
		setLastBlurTime(Date.now());
	}

	// useEffect(() => {
	// 	if (lastBlurTime === 0 || !isValueChanged) return;

	// 	const timer = setTimeout(async()=>{
	// 		await handleSaveButtonClick(); // 둘 다 비동기 함수지만 아래 코드가 먼저 실행될 수 있음. 그런 동작 막기위함
	// 		setIsValueChanged(false);
	// 	}, 10000); // 라우터(페이지 이동 시에도 실행되도록 하기)

	// 	return () => clearTimeout(timer);
	// }, [lastBlurTime, isValueChanged, handleSaveButtonClick])

	// useUnSavedAlert(isValueChanged);

	const handleName = (event : React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
		setIsValueChanged(true);
	}

	const handleGrade = (event : React.ChangeEvent<HTMLInputElement>) => {
		setGrade(event.target.value);
		setIsValueChanged(true);
	}

	const handleMajor = (event : React.ChangeEvent<HTMLInputElement>) => {
		setMajor(event.target.value);
		setIsValueChanged(true);
	}

	const handleStudentNumber = (event : React.ChangeEvent<HTMLInputElement>) => {
		setStudentNumber(event.target.value);
		setIsValueChanged(true);
	}

	const handlePhoneNumber = (event : React.ChangeEvent<HTMLInputElement>) => {
		setPhoneNumber(event.target.value);
		setIsValueChanged(true);
	}

	const handleEmail = (event : React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
		setIsValueChanged(true);
	}

	const handlebankBookImg = (file : File | null) => {
		setBankBookImg(file);
		setIsValueChanged(true);
	};

	const handleBankAccount = (event : React.ChangeEvent<HTMLInputElement>) => {
		setBankAccount(event.target.value);
		setIsValueChanged(true);
	}

	const handleBankName = (event : React.ChangeEvent<HTMLInputElement>) => {
		setBankName(event.target.value);
		setIsValueChanged(true);
	}

	const handleIdCardImg= (file : File | null) => {
		setIdCardImg(file);
		setIsValueChanged(true);
	}

	const handleSignImg = (file : File | null) => {
		setSignImg(file);
		setIsValueChanged(true);
	}


	return (
		<div className={classes.container}>
			<div className={`${classes.wrapper} ${classes.end_double}`}>
				<div>
					<div className={classes.big_title}>내 정보</div>
				</div>
				<div>
					<button className={classes.button_wrapper} onClick={handleSaveButtonClick}>
						<img src={saveIcon} alt='Save_Icon'/>
					</button>
				</div>
				
			</div>
		
			<hr/>
			
			<div className={classes.big_title}>기본 정보</div>

			<div className={`${classes.wrapper} ${classes.double}`}>
				<div className={classes.wrapper}>
					<div>
						<div className={classes.small_title}>이름</div>
						<input 
							className={classes.input}
							type='text'
							onChange={handleName}
							onBlur={handleBlur}
						/>
					</div>
				</div>
				<div className={classes.wrapper}>
					<div>
						<div className={classes.small_title}>학과</div>
						<input
							className={classes.input} 
							type='text'
							onChange={handleMajor}	
							onBlur={handleBlur}
						/>
					</div>
				</div>
			</div>

			<div className={`${classes.wrapper} ${classes.double}`}>
				<div className={classes.wrapper}>
					<div>
						<div className={classes.small_title}>학년</div>
						<input 
							className={classes.input}
							type='text'
							onChange={handleGrade}
							onBlur={handleBlur}
						/>
					</div>
				</div>
				<div className={classes.wrapper}>
					<div>
						<div className={classes.small_title}>학번</div>
						<input
							className={classes.input} 
							type='text'
							onChange={handleStudentNumber}	
							onBlur={handleBlur}
						/>
					</div>
				</div>
			</div>

			<div className={`${classes.wrapper} ${classes.double}`}>
				<div className={classes.wrapper}>
					<div>
						<div className={classes.small_title}>전화번호</div>
						<input 
							className={classes.input}
							type='text'
							onChange={handlePhoneNumber}
							onBlur={handleBlur}
						/>
					</div>
				</div>
				<div className={classes.wrapper}>
					<div>
						<div className={classes.small_title}>이메일</div>
						<input
							className={classes.input} 
							type='text'
							onChange={handleEmail}	
							onBlur={handleBlur}
						/>
					</div>
				</div>
			</div>
			
			<hr/>
			
			<div className={classes.big_title}>통장 및 신분증사본</div>
			<div className={classes.wrapper}>
				<div>
					<div className={classes.small_title}>통장사본</div>
					<ImageControler onImageChange={handlebankBookImg} data={bankBookImg}/>
				</div>
			</div>
			<div className={`${classes.wrapper} ${classes.double}`}>
				<div className={classes.wrapper}>
					<div>
						<div className={classes.small_title}>계좌번호</div>
						<input
							className={classes.input} 
							type='text'
							onChange={handleBankAccount}	
							onBlur={handleBlur}
						/>
					</div>
				</div>
				<div className={classes.wrapper}>
					<div>
						<div className={classes.small_title}>은행명</div>
						<input 
							className={classes.input}
							type='text'
							onChange={handleBankName}
							onBlur={handleBlur}
						/>
					</div>
				</div>
			</div>


			<div className={classes.wrapper}>
				<div>
					<div className={classes.small_title}>신분증사본</div>
					<ImageControler onImageChange={handleIdCardImg} data={idCardImg}/>
				</div>
			</div>

			<div className={classes.wrapper}>
				<div>
					<div className={classes.small_title}>사진 사진</div>
					<ImageControler onImageChange={handleSignImg} data={signImg}/>
				</div>
			</div>
		</div>
	)
}

export default UserInfo;