import React from 'react';
import Link from 'next/link';
import css from '@styles/Home.module.scss';

const ProjectCard = ({ date, description, link, cover_image, title }) => {
	return (
		<div className={css.CardProject}>
			<div className={css.CardProject__img}>
				<Link href={link}>
					<img src={cover_image} />
				</Link>
			</div>
			<div className={css.CardProject__text}>
				<div>
					<Link href={link}>
						<h2>{title}</h2>
					</Link>
					<p>{description}</p>
					<p>
						<small>Last updated {date}</small>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
