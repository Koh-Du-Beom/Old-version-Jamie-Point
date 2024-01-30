import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ActivityType from "../types/ActivityType.type";

interface TotalActivityInfo{
	activityCount : number;
	totalPoint : number;
}

interface UserInfoState{
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
  activities: ActivityType[];
	swCoreInfo : TotalActivityInfo;
	swCooperationInfo : TotalActivityInfo;
	swValueInfo : TotalActivityInfo;
	swConvergenceInfo : TotalActivityInfo;
	totalAwards : number;
	totalPoint : number;
}