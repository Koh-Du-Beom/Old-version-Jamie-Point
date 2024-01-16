/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import ActivityDropDownData from '../stores/ActivityDropDown.data';
const ActivityDropDown: React.FC = () => {
  const [selectedFirst, setSelectedFirst] = useState<string | null>(null);
  const [selectedSecond, setSelectedSecond] = useState<string | null>(null);
  const [selectedThird, setSelectedThird] = useState<string | null>(null);

  

  const handleFirstSelect = (firstContent : string) => {
    setSelectedFirst(firstContent);
    setSelectedSecond(null);
    setSelectedThird(null);
  }

  const handleSecondSelect = (secondContent : string) => {
    setSelectedSecond(secondContent);
    setSelectedThird(null);
  }

  const handleThirdSelect = (thirdContent : string) => {
    setSelectedThird(thirdContent);
  }

  useEffect(()=>{
    console.log(ActivityDropDownData);
    
  })
  return (
    <div>
      <select onChange={(e) => handleFirstSelect(e.target.value)}>
        <option value="">활동 분야를 선택해주세요</option>
        {ActivityDropDownData.map((item, index) => (
          <option key={index} value={item.firstContent}>{item.firstContent}</option>
        ))}
      </select>

      {selectedFirst && (
        <select>
          <option value="">하위 카테고리를 선택해주세요</option>
          {ActivityDropDownData.find(item => item.firstContent === selectedFirst)?.firstDetails.map((detail, index) => (
            <option key={index} value={detail.secondContent}>{detail.secondContent}</option>
          ))}
        </select>
      )}
      이거 잘 나오긴하냐?
    </div>
  )
};

export default ActivityDropDown;