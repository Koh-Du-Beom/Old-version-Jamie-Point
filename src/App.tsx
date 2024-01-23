/*eslint-disable*/
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import UserInfoPage from './pages/UserInfoPage';
import ActivityPage from './pages/ActivityPage';
import SWCorePage from './pages/SWCorePage';
import SWCooperationPage from './pages/SWCooperationPage';
import SWValuePage from './pages/SWValuePage';
import SWConvergencePage from './pages/SWConvergencePage';

function App() {
  
  return (
		<Routes>
			<Route path="/" element={<HomePage/>}/>
			<Route path='/info' element={<UserInfoPage/>}/>
			<Route path='/activity' element={<ActivityPage/>}/>

			{/* <Route path='/activity/SW핵심역량' element={<SWCorePage/>}/> */}
			<Route path='/activity/SW핵심역량/:activityId' element={<SWCorePage/>}/>

			{/* <Route path='/activity/SW산학협력·창업역량' element={<SWCooperationPage/>}/> */}
			<Route path='/activity/SW산학협력·창업역량/:activityId' element={<SWCooperationPage/>}/>

			{/* <Route path='/activity/SW가치확산역량' element={<SWValuePage/>}/> */}
			<Route path='/activity/SW가치확산역량/:activityId' element={<SWValuePage/>}/>

			{/* <Route path='/activity/SW융합역량' element={<SWConvergencePage/>}/> */}
			<Route path='/activity/SW융합역량/:activityId' element={<SWConvergencePage/>}/>


			{/* <Route path="activity/:area/:activityId" element={<ActivityPage/>}/> */}

			
		</Routes>
    
  );
}

export default App;