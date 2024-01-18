import { NavigateFunction } from "react-router-dom"
const rightNavBarData = (navigate : NavigateFunction) => {
	return [
		{
			title : '회원정보',
			onClick : () => {navigate('/info')},
		},
		{
			title : 'SW핵심',
			onClick : () => {navigate('/')},
		},
		{
			title : 'SW산학협력',
			onClick : () => {navigate('/')},
		},
		{
			title : 'SW가치확산',
			onClick : () => {navigate('/')},
		},
		{
			title : 'SW융합',
			onClick : () => {navigate('/')},
		},
		
	]
	
}

export default rightNavBarData;