interface UserInfoType{
	name : string;
	grade : number;
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