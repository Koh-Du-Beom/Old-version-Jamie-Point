import { useEffect } from "react";
import axios from "axios";

const useAutoSave = <T>(data: T) => {
  const body = JSON.stringify(data);

  useEffect(() => {
    // let timer: NodeJS.Timeout;

    // const saveData = async () => {
    //   try {
    //     const response = await axios.post('http://localhost:8080/zs', body);
    //     if (response.status === 200) {
    //       console.log("Data saved successfully");
    //       return response.data;
    //     }
    //   } catch (error) {
    //     console.error("Save error: ", error);
    //     alert("Save error");
    //     return null;
    //   }
    // };

    // timer = setTimeout(saveData, 3000);

    // return () => clearTimeout(timer);

		console.log(body);
		
  }, [body]);

  return null;
};

export default useAutoSave;
