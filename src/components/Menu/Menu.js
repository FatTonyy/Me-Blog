import React from "react";
import { Link } from "gatsby";

// style
import { Nav } from "./MenuStyle";

export default function Menu({ items }) {
	return (
		<Nav>
			{items.map(item => {
				return (
					<li key={item.id}>
						<Link to={item.link} activeClassName="active">
							{item.name}
						</Link>
					</li>
				);
			})}
		</Nav>
	);
}
