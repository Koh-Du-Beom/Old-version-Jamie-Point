import classes from '../../styles/components/Footer/BottomNavBar.module.css';

const BottomNavBar: React.FC = () => {

	const handleDocumentationButton = () => {
		//백엔드에 모든 정보 한번에 보내는 로직
		alert('문서화가 완료되었습니다.');
	}

	return (
	
		<div className={classes.navbar}>
			<div className={classes.wrapper}>
				<button className={classes.web_button}>web</button>
				<button className={classes.send_button} onClick={handleDocumentationButton}>문서화하기</button>
			</div>
		</div>
			
		
		
	)
};

export default BottomNavBar;