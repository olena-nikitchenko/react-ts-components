import React, { FC, ReactNode } from "react";
import css from "./Statistic.module.css";

interface SectionProps {
	title?: string;
	children: ReactNode;
}

export const Section: FC<SectionProps> = ({ title, children }) => {
	return (
		<div>
			{title && <h2 className={css.title}>{title}</h2>}
			{children}
		</div>
	);
};
