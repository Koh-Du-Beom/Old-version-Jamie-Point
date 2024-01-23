import classes from '../../styles/FormStyles.module.css';
import ImageControler from '../ImageControler';
import { useState } from 'react';
import useAutoSave from '../../hooks/useAutoSave';

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

	const handleName = (event : React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	}

	const handleGrade = (event : React.ChangeEvent<HTMLInputElement>) => {
		setGrade(event.target.value);
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

	const handleIdCardImg= (file : File | null) => {
		setIdCardImg(file);
	}

	//은행명이랑 계좌번호 입력하는 input만들지?
	const formData = [
		{
			pageType : "회원정보", // 어떤 페이지에서 온 정보인지 밝히기?
			name : name,
			grade : grade,
			major : major,
			studentNumber : studentNumber,
			phoneNumber : phoneNumber,
			email : email,
			
			//4페이지
			bankBookImg: bankBookImg,
			idCardImg : idCardImg,
		}
	]
	console.log(bankBookImg);
	useAutoSave(formData);

	return (
		<div className={classes.container}>
			<div className={classes.big_title}>내 정보</div>
			<hr/>
			
			<div className={classes.big_title}>기본 정보</div>
			<div className={classes.wrapper}>
				<div className={classes.small_title}>이름</div>
				<input 
					className={classes.input}
					type='text'
					onChange={handleName}
				/>
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
					<ImageControler onImageChange={handlebankBookImg}/>
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


			<div className={classes.wrapper}>
				<div>
					<div className={classes.small_title}>신분증사본</div>
					<ImageControler onImageChange={handleIdCardImg}/>
				</div>
			</div>
		</div>
	)
}

export default UserInfo;