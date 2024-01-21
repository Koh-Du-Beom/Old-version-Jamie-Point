/*eslint-disable*/
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActivityPage from './pages/ActivityPage';
import UserInfoPage from './pages/UserInfoPage';
import SWConvergencePage from './pages/SWConvergencePage';
import SWValuePage from './pages/SWValuePage';
import SWCooperationPage from './pages/SWCooperationPage';
import SWCorePage from './pages/SWCorePage';
function App() {
  
  return (
		<Routes>
			<Route path="/" element={<ActivityPage/>}/>
			<Route path='/info' element={<UserInfoPage/>}/>
			<Route path="/sw-core" element={<SWCorePage/>}/>
			<Route path="/sw-cooperation" element={<SWCooperationPage/>}/>
			<Route path="/sw-value" element={<SWValuePage/>}/>
			<Route path="/sw-convergence" element={<SWConvergencePage/>}/>
		</Routes>
    
  );
}

export default App;