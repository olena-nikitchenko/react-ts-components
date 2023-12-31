import React from "react";
import { FriendList } from "./components/friends/FriendList";
import { Profile } from "./components/profile/Profile";
import { Statistics } from "./components/statistics/Statistics";
import { Section } from "./components/statistics/Section";
import { TransactionHistory } from "./components/transactions/TransactionHistory";
import friends from "./components/friends/frinds.json";
import user from "./components/profile/user.json";
import data from "./components/statistics/data.json";
import transactions from "./components/transactions/transactions.json";

function App() {
	const friendsData = friends.map(item => ({
		id: item.id,
		avatar: item.avatar,
		name: item.name,
		isOnline: item.isOnline,
	}));
	const userProfile = {
		username: user.username,
		tag: user.tag,
		location: user.location,
		avatar: user.avatar,
		stats: user.stats,
	};
	const statsData = data.map(item => ({
		id: item.id,
		label: item.label,
		percentage: item.percentage,
	}));
	const transactionsData = transactions.map(item => ({
		id: item.id,
		type: item.type,
		amount: item.amount,
		currency: item.currency,
	}));
	return (
		<div>
			<Profile user={userProfile} />
			<Section title="Upload stats">
				<Statistics stats={statsData} />
			</Section>
			<FriendList friends={friendsData} />
			<TransactionHistory transactions={transactionsData} />
		</div>
	);
}

export default App;
