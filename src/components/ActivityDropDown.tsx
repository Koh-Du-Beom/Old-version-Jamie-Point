/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import ActivityDropDownData from '../stores/ActivityDropDown.data';
const ActivityDropDown: React.FC = () => {
  const [area, setArea] = useState<string | null>(null);
  const [program, setProgram] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [point, setPoint] = useState<string | null>(null);
  const [isDiverse] = useState<boolean>(false);
  //구성 추후 고민

  useEffect(()=>{
    console.log(ActivityDropDownData);
    
  })
  return (
    <div>
      
    </div>
  )
};

export default ActivityDropDown;