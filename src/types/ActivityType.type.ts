interface ActivityType{
	pageType : string | undefined,
	activityImg : File | null,
	program: string | null,
	type : string | null,
	topic : string | null, 
	point : number | null,
	agency : string,
	date : string,
	detail : string,
}

export default ActivityType;