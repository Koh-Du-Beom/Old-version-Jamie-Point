/*eslint-disable*/
import classes from '../../styles/FormStyles.module.css';
import ImageControler from '../ImageControler';
import { useState } from 'react';
import useAutoSave from '../../hooks/useAutoSave';
import axios from 'axios';
import UserInfoType from '../../types/UserInfoType.type';
import saveIcon from '../../assets/saveIcon.png'

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

	const handleSaveButton = async () => {
		try{
			const formData = new FormData();
			formData.append('pageType', '회원정보');
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

			

			const response = await axios.post('http://localhost:8080/zs', formData, {
				headers: {
					'Content-Type' : 'multipart/form-data'
				}
			});
			
		}catch(error){
			console.error("Error : ", error);
			
		}
	
  };

	const handleName = (event : React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	}

	const handleGrade = (event : React.ChangeEvent<HTMLInputElement>) => {
		setGrade(event.target.value);
	}

	const handleMajor = (event : React.ChangeEvent<HTMLInputElement>) => {
		setMajor(event.target.value);
	}

	const handleStudentNumber = (event : React.ChangeEvent<HTMLInputElement>) => {
		setStudentNumber(event.target.value);
	}

	const handlePhoneNumber = (event : React.ChangeEvent<HTMLInputElement>) => {
		setPhoneNumber(event.target.value);
	}

	const handleEmail = (event : React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}

	const handlebankBookImg = (file : File | null) => {
		setBankBookImg(file);
	};

	const handleBankAccount = (event : React.ChangeEvent<HTMLInputElement>) => {
		setBankAccount(event.target.value);
	}

	const handleBankName = (event : React.ChangeEvent<HTMLInputElement>) => {
		setBankName(event.target.value);
	}

	const handleIdCardImg= (file : File | null) => {
		setIdCardImg(file);
	}

	const handleSignImg = (file : File | null) => {
		setSignImg(file);
	}


	return (
		<div className={classes.container}>
			<div className={`${classes.wrapper} ${classes.end_double}`}>
				<div>
					<div className={classes.big_title}>내 정보</div>
				</div>
				<div>
					<button className={classes.button_wrapper} onClick={handleSaveButton}>
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