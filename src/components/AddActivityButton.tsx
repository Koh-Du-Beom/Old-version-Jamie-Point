
interface AddActivityButtonProps{
	onClick: () => void;
}

const AddActivityButton:React.FC<AddActivityButtonProps> = ({onClick}) => {
	return (
		<button onClick={onClick}>Add Activity</button>
	)
};

export default AddActivityButton;