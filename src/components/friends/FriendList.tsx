import { FC } from "react";
import clsx from "clsx";
import { IFriends } from "./type";
import css from "./FriendList.module.css";

interface FriendListProps {
	friends: IFriends[];
}

export const FriendList: FC<FriendListProps> = ({ friends }) => {
	return (
		<section className={css.friendSection}>
			<ul className={css.friendList}>
				{friends.map(item => (
					<li
						className={css.friendItem}
						key={item.id}
					>
						<span
							className={clsx(css.statusItem, {
								[css.isOnline]: item.isOnline,
							})}
						>
							{item.isOnline}
						</span>

						<img
							className={css.imgAvatar}
							src={item.avatar}
							alt="User avatar"
							width="48"
						/>
						<p className={css.name}>{item.name}</p>
					</li>
				))}
			</ul>
		</section>
	);
};
