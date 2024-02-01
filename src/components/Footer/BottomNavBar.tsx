/*eslint-disable*/
import classes from '../../styles/components/Footer/BottomNavBar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from "../../stores/redux/store";
import { updateActivity, removeActivity, updateSWCoreInfo, updateTotals } from "../../stores/redux/userSlice";
import axios from 'axios';

const BottomNavBar: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const userInfo = useSelector((state : RootState) => state.userInfo);

	const handleCheckBeforeDocumentation = async() => {
		//백엔드에 문서화 하기전 프론트에서 내용 확인할 수 있게 할듯 일단 백엔드에 보내는거 확인부터
		const body = JSON.stringify(userInfo);
		console.log(body);

		try{
			const response = await axios.post('http://localhost:8080/zs', body, {
				headers: {
					'Content-Type' : 'application/json'
				}
			});
			if (response){
				console.log(response.data);
			}
		}catch(error){
			console.error('문서화 실패 : ', error);
			
		}
		
	}

	return (
	
		<div className={classes.navbar}>
			<div className={classes.wrapper}>
				<button className={classes.web_button}>web</button>
				<button className={classes.send_button} onClick={handleCheckBeforeDocumentation}>문서화하기</button>
			</div>
		</div>
			
		
		
	)
};

export default BottomNavBar;