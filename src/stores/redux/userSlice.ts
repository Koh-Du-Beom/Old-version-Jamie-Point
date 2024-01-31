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
  bankBookImg: string | null;
  idCardImg: string | null;
  signImg: string | null;
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
		updateActivity: (state, action: PayloadAction<{ index: number, activity: ActivityType }>) => {
      const { index, activity } = action.payload;
      state.activities[index] = activity; // 인덱스에 해당하는 활동을 업데이트
    },
	},
});

export const { updateUserInfo, updateActivity } = userSlice.actions;

export default userSlice.reducer;



