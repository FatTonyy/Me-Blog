import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

// icons
import DateIcon from "../../images/calendar.svg";
import TimeIcon from "../../images/watch.svg";

export default function BlogPostCard({ slug, title, date, readingTime, excerpt, image }) {
	return (
		<CardWrapper>
			<ImgWrapper>
				<Img fluid={image} />
			</ImgWrapper>

			<TextWrapper>
				<Link to={slug}>
					<h2>{title}</h2>
				</Link>
				<StatWrapper>
					<DateWrapper>
						<img src={DateIcon} alt="date" />
					</DateWrapper>
					{date}
					<ReadingTimeWrapper>
						<img src={TimeIcon} alt="time" />
						{readingTime}
					</ReadingTimeWrapper>
				</StatWrapper>

				<p>{excerpt}</p>
			</TextWrapper>
		</CardWrapper>
	);
}
