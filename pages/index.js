import React, { useEffect, useState } from 'react'
import css from '@styles/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NextLogo from '../assets/nextjs-3.svg'
import Redux from '../assets/redux.svg'


const Home = () => {
    
     return (
         <main className={css.Home}>
            <section className={css.Home__Hero}>
               <figure>
                  <img  src='localhost:3000/images/profile.jpg'/>
               </figure>
               <article>
                  <h1>Daniel Carrete</h1>
                  <p>Hello world, I am a frontend developer.</p>
                  <button>Download CV</button>
                  <button>Contact me</button>
               </article>
            </section> 
            <section className={css.Resume}>
               <h2>About me</h2>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo ipsam pariatur ut velit incidunt, corporis quis? Quis quo, earum dolor tempore, dignissimos nobis, atque ex assumenda eos facilis officiis.
               </p>
            </section> 
            <selection className={css.Home__Skills}>
               <h2>Skills</h2>
               <span>Technologies that I use</span>
               <div className={css.Home__Skills__container}>
                  <div>
                     <FontAwesomeIcon icon={['fab', 'react']} size='5x'/>
                     <span>React</span>
                  </div>
                  <div>
                     <FontAwesomeIcon icon={['fab', 'sass']} size='5x' />
                     <span>Sass</span>
                  </div>
                  <div>
                     <FontAwesomeIcon icon={['fab', 'git-alt']} size='5x'/>
                     <span>Git</span>
                  </div>
                  <div>
                     <FontAwesomeIcon icon={['fab', 'node']} size='5x'/>
                     <span>Node</span>
                  </div>
                  <div>
                     <FontAwesomeIcon icon={['fab', 'js-square']} size='5x'/>
                     <span>Javascript</span>               
                  </div>
                  <div>
                     <FontAwesomeIcon icon={['fab', 'css3-alt']} size='5x'/>
                     <span>Css</span> 
                  </div>
                  <div>
                     <FontAwesomeIcon icon={['fab', 'html5']} size='5x'/>
                     <span>Html5</span> 
                  </div>
                  <div>
                     <FontAwesomeIcon icon={['fab', 'react']} size='5x'/>
                     <span>React Native</span>
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
                     <FontAwesomeIcon icon={['fab', 'bootstrap']} size='5x'/>
                     <span>Bootstrap</span>
                  </div>
               </div>
               
            </selection>
            <section className={css.Home__Projects}>
               <h2>Projects</h2>
               
               <div>
                  <figure>
                     <img/>
                  </figure>
                  <div>
                     <h3></h3>
                     <p></p>
                  </div>
               </div>
               <div>
                  <figure>
                     <img/>
                  </figure>
                  <div>
                     <h3></h3>
                     <p></p>
                  </div>
               </div>
               <button>See more</button>
               
            </section>
         </main>
     )
}

export default Home