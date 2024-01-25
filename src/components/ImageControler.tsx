import classes from '../styles/components/ImageControler.module.css';
import { useState, useRef } from 'react';
interface ImageControlerProps {
	onImageChange : (file : File | null) => void;
}

const ImageControler : React.FC<ImageControlerProps> = ({onImageChange}) => {

	const [imgURL, setImgURL] = useState<string | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);

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

	const handleImageContainerClick = () => {
		fileInputRef.current?.click();
	}

	const handleCloseButtonClick = () => {
		setImgURL(null);
	}

	return (
		<div className={`${classes.imageContainer} ${imgURL ? classes.solidBorder : null}`} onClick={handleImageContainerClick}>
			{!imgURL? (
				<div className={classes.uploadPrompt}>
					<div className={classes.plusIcon}>+</div>
					<div>사진을 입력해주세요</div>
				</div> 
			): <img src={imgURL} alt='Uploaded'/>}
			<input 
				ref={fileInputRef}
				type="file" 
				accept="image/*"
				onChange={handleFileChange}/>
		</div>
		
	)
}

export default ImageControler;

