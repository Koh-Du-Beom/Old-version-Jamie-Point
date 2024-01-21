import classes from '../styles/components/ImageControler.module.css';
import { useState } from 'react';
interface ImageControlerProps {
	onImageChange : (file : File | null) => void;
}

const ImageControler : React.FC<ImageControlerProps> = ({onImageChange}) => {

	const [imgURL, setImgURL] = useState<string | null>(null);
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
        const selectedFile = event.target.files[0];
        onImageChange(selectedFile);
        const fileUrl = URL.createObjectURL(selectedFile);
        setImgURL(fileUrl); 
    } else {
        onImageChange(null);
        setImgURL(null);
    }
};


	return (
		<div>
			{
				imgURL ? 
				<div className={classes.imageContainer}>
					<img src={imgURL} alt='imgURL'/>
				</div> :
				<div className={classes.imageContainer}>
					사진을 입력해주세요 : 디자인 추가예정
				</div>
			}
			<input type="file" accept="image/*" onChange={handleFileChange} />
		</div>
		
	)
}

export default ImageControler;

