import React, { useState } from "react";
import classes from '../styles/RightNavBar.module.css';

const RightNavBar: React.FC = () => {
  const [buttonData] = useState<string[]>(['회원정보', 'SW핵심', 'SW산학협력', 'SW가치확산', 'SW융합']);

  return (
    <div className={classes.navbar}>
      {buttonData.map((item, index) => (
        <button key={index} className={classes.button}>{item}</button>
      ))}
    </div>
  )
}

export default RightNavBar;