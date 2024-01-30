import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ActivityType from "../../types/ActivityType.type";
import UserInfoType from "../../types/UserInfoType.type";

interface TotalActivity{
	activityCount : number;
	totalPoint : number;
}

interface UserState{
	name: string;
  grade: number;
  major: string;
  studentNumber: string;
  phoneNumber: string;
  email: string;
  bankAccount: string;
  bankName: string;
  bankBookImg: File | null;
  idCardImg: File | null;
  signImg: File | null;
  activities: ActivityType[] | [];
	swCoreInfo : TotalActivity;
	swCooperationInfo : TotalActivity;
	swValueInfo : TotalActivity;
	swConvergenceInfo : TotalActivity;
	totalAwards : number;
	totalPoint : number;
}

const initialState: UserState = {
	name : '',
	grade : 201912345,
	major : '',
	studentNumber: '',
	phoneNumber: '010-0000-0000',
  email: 'example@mail.com',
  bankAccount: '123456789',
  bankName: '예시은행',
  bankBookImg: null,
  idCardImg: null,
  signImg: null,
  activities: [],
	swCoreInfo : {activityCount: 0, totalPoint: 0},
	swCooperationInfo : {activityCount: 0, totalPoint: 0},
	swValueInfo : {activityCount: 0, totalPoint: 0},
	swConvergenceInfo : {activityCount: 0, totalPoint: 0},
	totalAwards : 0,
	totalPoint : 0,
};

export const userSlice = createSlice({
	name : 'user',
	initialState,
	reducers: {
		updateUserInfo: (state, action: PayloadAction<UserInfoType>) => {
			return { ...state, ...action.payload};
		},
	}
});

export const { updateUserInfo } = userSlice.actions;

export default userSlice.reducer;



