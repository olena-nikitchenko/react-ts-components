export interface IFriends {
	avatar: string;
	name: string;
	isOnline: boolean;
	id: number;
}

export interface IProfile {
	username: string;
	tag: string;
	location: string;
	avatar: string;
	stats: {
		followers: number;
		views: number;
		likes: number;
	};
}
