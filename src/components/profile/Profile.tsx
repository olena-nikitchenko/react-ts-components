import { FC, ProfilerProps } from "react";
import css from "./Profile.module.css";
import { IProfile } from "../friends/type";
interface ProfileProps {
	user: IProfile;
}

export const Profile: FC<ProfileProps> = ({ user }) => {
	return (
		<div className={css.profile}>
			<div className={css.description}>
				<img
					src={user.avatar}
					alt="User avatar"
					className={css.avatar}
				/>
				<p className={css.nameText}>{user.username}</p>
				<p className={css.tagText}>{user.tag}</p>
				<p className={css.locationText}>{user.location}</p>
			</div>
			<ul className={css.stats}>
				<li>
					<span className="label">Followers </span>
					<span className="quantity">{user.stats.followers}</span>
				</li>
				<li>
					<span className="label">Views </span>
					<span className="quantity">{user.stats.views}</span>
				</li>
				<li>
					<span className="label">Likes </span>
					<span className="quantity">{user.stats.likes}</span>
				</li>
			</ul>
		</div>
	);
};
