import React from "react";
import { Link } from "gatsby";

export default function Menu({ items }) {
	return (
		<ul>
			{items.map(item => {
				return (
					<li key={item.id}>
						<Link to={item.link} activeClassName="active">
							{item.name}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
