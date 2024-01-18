/*eslint-disable*/
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActivityPage from './pages/ActivityPage';
import UserInfoPage from './pages/UserInfoPage';
function App() {
  
  return (
		<Routes>
			<Route path="/" element={<ActivityPage/>}/>
			<Route path='/info' element={<UserInfoPage/>}/>
		</Routes>
    
  );
}

export default App;