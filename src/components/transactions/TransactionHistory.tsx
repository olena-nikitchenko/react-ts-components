import React, { FC } from "react";
import css from "./TransactionHistory.module.css";
import { ITransactions } from "../types/types";

interface TransactionHistoryProps {
	transactions: ITransactions[];
}
export const TransactionHistory: FC<TransactionHistoryProps> = ({ transactions }) => {
	return (
		<table className={css.transactionHistory}>
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
				{transactions.map(item => (
					<tr key={item.id}>
						<td>{item.type}</td>
						<td>{item.amount}</td>
						<td>{item.currency}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
