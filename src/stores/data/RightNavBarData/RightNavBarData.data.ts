import { NavigateFunction } from "react-router-dom"
const rightNavBarData = (navigate : NavigateFunction) => {
	return [
		{
			title : '회원정보',
			onClick : () => {navigate('/info')},
		},
		{
			title : 'SW핵심역량',
			onClick : () => {navigate('/activity/SW핵심역량')},
		},
		{
			title : 'SW산학협력',
			onClick : () => {navigate('/activity/SW산학협력·창업역량')},
		},
		{
			title : 'SW가치확산',
			onClick : () => {navigate('/activity/SW가치확산역량')},
		},
		{
			title : 'SW융합',
			onClick : () => {navigate('/activity/SW 융합역량')},
		},
		
	]
	
};

export default rightNavBarData;