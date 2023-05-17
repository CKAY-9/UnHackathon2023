"use client";

import { LeaderboardEntry } from "@/api/leaderboard";
import style from "./leaderboard.module.scss";
import { useEffect, useState } from "react";

export const LeaderboardEntries = (props: { entries: LeaderboardEntry[] }) => {
	const [entries, setEntries] = useState<LeaderboardEntry[]>(props.entries);

	useEffect(() => {}, []);

	return (
    	<>
			<h1>Leaderboard</h1>
			<span>Scored are calculated with the following formula: <code>(startTime / (endTime^1.12)) * ((correct / total) + 10)</code></span>
			{(entries !== undefined && entries.length > 0) && (
				<table className={style.entries}>
					<tr style={{"backgroundColor": "rgb(var(--accent))"}}>
						<th>Name</th>
						<th>Test</th>
						<th>Score</th>
					</tr>
					{entries.map((entry: LeaderboardEntry, index: number) => {
						return (
							<tr key={index}>
								<td>{entry.username}</td>
								<td>{entry.test}</td>
								<td>{entry.score}</td>
							</tr>
						);
					})}
				</table>
			)}
		</>
  	);
};

const Client = ({ children }: { children: JSX.Element }) => {
	return <>{children}</>;
};

export default Client;
