import { useEffect } from "react";

const useAutoSave = <T>(data : T) => {
	const body = JSON.stringify(data);

	useEffect(()=> {
		const timer = setTimeout(()=> {
			console.log('데이터 전송', body);
		}, 3000);

		return () => clearTimeout(timer);
	}, [body]);
}

export default useAutoSave;