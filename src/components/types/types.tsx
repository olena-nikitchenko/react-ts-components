export interface IAddress {
	street: string;
	city: string;
	zipcode: string;
}

export interface IUser {
	id: number;
	name: string;
	email: string;
	address: IAddress;
}

export interface ITodo {
	id: number;
	title: string;
	completed: boolean;
}

export interface IStats {
	id: string;
	label: string;
	percentage: number;
}

export interface ITransactions {
	id: string;
	type: string;
	amount: string;
	currency: string;
}
