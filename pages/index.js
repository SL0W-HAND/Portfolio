import React, { useEffect, useState } from 'react'
import css from '@styles/Home.module.scss'


const Home = () => {
    
     return (
         <main className={css.Home}>
            <section className={css.Home__Hero}>
               <figure>
                  <img/>
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
               <p></p>
            </section> 
            <selection className={css.Home__Skills}>
               <h2>Skills</h2>
               <div>
                  <h3></h3>
               </div>
               <div>

               </div>
               <div>

               </div>
               <div>

               </div>
               <div>

               </div>
               <div>

               </div>
               <div>

               </div>
               <div>

               </div>
               <div>

               </div>
               <div>

               </div>
               <div>

               </div>
               <div>

               </div>
            </selection>
            <section className={css.Home__Projects}>
               <button>See more</button>
               
            </section>
         </main>
     )
}

export default Home