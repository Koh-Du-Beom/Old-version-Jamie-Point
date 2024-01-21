import { NavigateFunction } from "react-router-dom"
const rightNavBarData = (navigate : NavigateFunction) => {
	return [
		{
			title : '회원정보',
			onClick : () => {navigate('/info')},
		},
		{
			title : 'SW핵심',
			onClick : () => {navigate('/sw-core')},
		},
		{
			title : 'SW산학협력',
			onClick : () => {navigate('/sw-cooperation')},
		},
		{
			title : 'SW가치확산',
			onClick : () => {navigate('/sw-value')},
		},
		{
			title : 'SW융합',
			onClick : () => {navigate('/sw-convergence')},
		},
		
	]
	
};

export default rightNavBarData;