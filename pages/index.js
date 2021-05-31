import React, { useEffect, useState } from 'react'
import css from '@styles/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NextLogo from '../assets/nextjs-3.svg'
import Redux from '../assets/redux.svg'
import Link from 'next/link'


const Home = () => {
    
     return (
         <main className={css.Home}>
            <section className={css.Home__Hero}>
               <div>
                  <figure>
                     <img  src='https://daniel-carrete.vercel.app/images/assets/profile.jpg'/>
                  </figure>
                  <article>
                     <h1>Daniel Carrete</h1>
                     <p>Hello world, I am a frontend developer.</p>
                     <button>Download CV</button>
                     <button>Contact me</button>
                  </article>
               </div>
            </section> 
            <section className={css.Home__Resume}>
               <h2>About me</h2>
               <p> I'm a Frontend developer passionate about creating innovative solutions. proficient in the use of web technologies such as JavaScript, React, HTML, CSS, etc. also a programming, music and science enthusiast, dedicated to always learning new things. I am looking for an entry position in a great company to be a hard-working asset to any team, to learn, grow and develop long-term.</p>
            </section> 
            <selection className={css.Home__Skills}>
               <h2>Best Skills</h2>
               <span>Technologies that I use</span>
               <div className={css.Home__Skills__container}>
                  <div>
                     <span style={{color:'blue'}}>
                        <FontAwesomeIcon icon={['fab', 'react']} color='#61DAFB' size='5x'/>
                     </span>
                     <span>React</span>
                  </div>
                  <div>
                     <FontAwesomeIcon icon={['fab', 'sass']} color='#CF649A' size='5x' />
                     <span>Sass</span>
                  </div>
                  <div>
                     <FontAwesomeIcon icon={['fab', 'git-alt']} color='#F64D27' size='5x'/>
                     <span>Git</span>
                  </div>
                  <div>
                     <FontAwesomeIcon icon={['fab', 'node-js']} color='#539E43' size='5x'/>
                     <span>Node</span>
                  </div>
                  <div>
                     <FontAwesomeIcon icon={['fab', 'js-square']} color='#F7DF1E' size='5x'/>
                     <span>Javascript</span>               
                  </div>
                  <div>
                     <FontAwesomeIcon icon={['fab', 'css3-alt']} color='#038FCB' size='5x'/>
                     <span>Css</span> 
                  </div>
                  <div>
                     <FontAwesomeIcon icon={['fab', 'html5']} color='#C95D37' size='5x'/>
                     <span>Html5</span> 
                  </div>
                  <div>
                     <NextLogo width='50px' height='30px'/>
                     <span>Next js</span>
                  </div>
                  <div>
                     <Redux width='50px' height='30px'/>
                     <span>Redux</span>
                  </div>
                  <div>
                     <FontAwesomeIcon icon={['fab', 'react']} color='#61DAFB' size='5x'/>
                     <span>React Native</span>
                  </div>
                  <div>
                     <FontAwesomeIcon icon={['fab', 'bootstrap']} color='#7952B3' size='5x'/>
                     <span>Bootstrap</span>
                  </div>
               </div>
               
            </selection>
            <section className={css.Home__Projects}>
               <span>
                  <h2>Projects</h2>
                  <button>See more</button>
               </span>
               <div className={css.Home__Projects__card}>
                  <Link href='/'>
                     <figure>
                        <img src='https://daniel-carrete.vercel.app/images/projects_images/cross_port/page1.jpg'/>
                     </figure>
                  </Link>
                  <div>
                     <h3>Cross Port</h3>
                     <p>An application to transfer files, developed in javascript with electron, react and express</p>
                  </div>
               </div>
               <div className={css.Home__Projects__card}>
                  <Link href='/'>
                     <figure>
                        <img src='https://daniel-carrete.vercel.app/images/projects_images/guitar_nextjs/page3.jpg'/>
                     </figure>
                  </Link>
                  <div>
                     <h3>Guitar Nextjs</h3>
                     <p>web app developed with Next Js, about the best guitarists</p>
                  </div>
               </div>       
            </section>
            <a href='https://www.freepik.es/fotos/fondo'>Foto de Fondo creado por mrsiraphol - www.freepik.es</a>
         </main>
     )
}

export default Home