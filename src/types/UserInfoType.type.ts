interface UserInfoType{
	pageType : string;
	name : string;
	grade : string;
	major : string;
	studentNumber : string;
	phoneNumber : string;
	email : string;
	bankAccount : string;
	bankName : string;
	bankBookImg : File | null;
	idCardImg : File | null;
	signImg : File | null;
}

export default UserInfoType;