import React, { useEffect, useState } from 'react';
import css from '@styles/Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NextLogo from '../assets/nextjs-3.svg';
import Redux from '../assets/redux.svg';
import Figma from '../assets/figma.svg';
import Mongo from '../assets/MongoDB.svg';
import Link from 'next/link';
import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>Home</title>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
			</Head>
			<div className={css.Hero}>
				<div>
					<article>
						<h1>Daniel Carrete</h1>
						<p>Hello world, I am a front-end developer.</p>
						<Link href='/docs/Daniel_Carrete_CV.pdf'>
							<button>Download CV</button>
						</Link>
						<Link href='/contact'>
							<button>Contact me</button>
						</Link>
					</article>
				</div>
			</div>
			<main className={css.Home}>
				<section className={css.Home__Resume}>
					<h2>About me</h2>
					<p>
						{' '}
						I'm a Front-end developer passionate about creating
						innovative solutions. proficient in the use of web
						technologies such as JavaScript, React, HTML, CSS, etc.
						also a programming, music and science enthusiast,
						dedicated to always learning new things. I am looking
						for an entry position in a great company to be a
						hard-working asset to any team, to learn, grow and
						develop long-term.
					</p>
				</section>
				<selection className={css.Home__Skills}>
					<h2>Best Skills</h2>
					<span>Technologies that I use</span>
					<div className={css.Home__Skills__container}>
						<div>
							<span style={{ color: 'blue' }}>
								<FontAwesomeIcon
									icon={['fab', 'react']}
									color='#61DAFB'
									size='5x'
								/>
							</span>
							<span>React</span>
						</div>
						<div>
							<FontAwesomeIcon
								icon={['fab', 'sass']}
								color='#CF649A'
								size='5x'
							/>
							<span>Sass</span>
						</div>
						<div>
							<FontAwesomeIcon
								icon={['fab', 'git-alt']}
								color='#F64D27'
								size='5x'
							/>
							<span>Git</span>
						</div>
						<div>
							<FontAwesomeIcon
								icon={['fab', 'node-js']}
								color='#539E43'
								size='5x'
							/>
							<span>Node</span>
						</div>
						<div>
							<FontAwesomeIcon
								icon={['fab', 'js-square']}
								color='#F7DF1E'
								size='5x'
							/>
							<span>Javascript</span>
						</div>
						<div>
							<FontAwesomeIcon
								icon={['fab', 'css3-alt']}
								color='#038FCB'
								size='5x'
							/>
							<span>Css</span>
						</div>
						<div>
							<FontAwesomeIcon
								icon={['fab', 'html5']}
								color='#C95D37'
								size='5x'
							/>
							<span>Html5</span>
						</div>
						<div>
							<NextLogo width='50px' height='30px' />
							<span>Next js</span>
						</div>
						<div>
							<Redux width='50px' height='30px' />
							<span>Redux</span>
						</div>
						<div>
							<FontAwesomeIcon
								icon={['fab', 'react']}
								color='#61DAFB'
								size='5x'
							/>
							<span>React Native</span>
						</div>
						<div>
							<FontAwesomeIcon
								icon={['fab', 'bootstrap']}
								color='#7952B3'
								size='5x'
							/>
							<span>Bootstrap</span>
						</div>
						<div>
							<Figma width='50px' height='30px' />
							<span>Figma</span>
						</div>
						<div>
							<Mongo width='50px' height='30px' />
						</div>
						<div>
							<FontAwesomeIcon
								icon={['fab', 'python']}
								size='5x'
							/>
							<span>Python</span>
						</div>
						<div>
							<FontAwesomeIcon icon={['fab', 'less']} size='5x' />
							<span>Less</span>
						</div>
					</div>
				</selection>
				<section className={css.Home__Projects}>
					<span>
						<h2>Projects</h2>
						<Link href='/projects'>
							<button>See more</button>
						</Link>
					</span>
					<div className={css.Home__Projects__card}>
						<Link href='/projects/cross-port'>
							<figure>
								<img src='https://daniel-carrete.vercel.app/images/projects_images/cross_port/page1.jpg' />
							</figure>
						</Link>
						<div>
							<h3>Cross Port</h3>
							<p>
								An application to transfer files, developed in
								javascript with electron, react and express
							</p>
						</div>
					</div>
					<div className={css.Home__Projects__card}>
						<Link href='/projects/node-stream'>
							<figure>
								<img src=' https://daniel-carrete.vercel.app/images/projects_images/node_stream/node_stream_home2.png' />
							</figure>
						</Link>
						<div>
							<h3>Node Stream</h3>
							<p>
								Here is an application to make video streaming
								for the videos in your computer created with the
								MERN stack with typescript.
							</p>
						</div>
					</div>
				</section>
			</main>
			<footer className={css.footer}>
				<a href='https://www.freepik.es/fotos/fondo'>
					Background photo created by mrsiraphol - www.freepik.es
				</a>
			</footer>
		</>
	);
};

export default Home;
