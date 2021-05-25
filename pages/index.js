import React, { useEffect, useState } from 'react'
import css from '@styles/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NextLogo from '../assets/nextjs-3.svg'
import Redux from '../assets/redux.svg'


const Home = () => {
    
     return (
         <main className={css.Home}>
            <section className={css.Home__Hero}>
               <h1>building</h1>
               <img />
               <figure>
                  <img  />
               </figure>
               <article>
                  <h1>Daniel Carrete</h1>
                  <p>Hello world, I am a frontend developer.</p>
                  <button>Download CV</button>
                  <button>Contact me</button>
               </article>
            </section> 
            <section className={css.Home__Resume}>
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
            <a href='https://www.freepik.es/fotos/fondo'>Foto de Fondo creado por mrsiraphol - www.freepik.es</a>
         </main>
     )
}

export default Home