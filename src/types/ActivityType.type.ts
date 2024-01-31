interface ActivityType{
	id : string;
	pageType : string,
	activityImg : string | null,
	program: string | null,
	type : string | null,
	topic : string | null, 
	point : number | null,
	agency : string,
	date : string,
	detail : string,
}

export default ActivityType;