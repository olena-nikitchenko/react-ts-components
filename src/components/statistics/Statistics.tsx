import React, { FC } from "react";
import css from "./Statistic.module.css";
import { IStats } from "../types/types";

interface StatisticsProps {
	stats: IStats[];
}

export const Statistics: FC<StatisticsProps> = ({ stats }) => {
	return (
		<section className={css.statistics}>
			{/* <h2 className={css.title}>Upload stats</h2> */}

			<ul className={css.statList}>
				{stats.map((item, index) => (
					<li
						className={`${css.item} ${css[`item-${index + 1}`]}`}
						key={item.id}
					>
						<span className={css.label}>{item.label}</span>
						<span className={css.percentage}>{item.percentage}%</span>
					</li>
				))}
			</ul>
		</section>
	);
};
