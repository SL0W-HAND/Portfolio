import React from 'react'
import css from '@styles/Home.module.scss'

const cv = () => {
    return (
        <main className={css.CV}>
            <div className={css.CV__Hero}>
                <h1>Daniel Carrete Guzmán</h1>
                <span><h3>Front-end Developer</h3></span>
            </div>
            <aside className={css.CV__aside}>
                <div>
                    <span >
                        <h2 >DETAILS</h2>
                    </span>
                    <div>
                        <h3>EMAIL</h3>
                        <span>DanielCarreteGuzman@outlook.com</span>
                    </div>
                    <div>
                        <h3>NATIONALITY</h3>
                        <span>Mexican</span>
                    </div>
                    <div>
                        <h3>ADDRESS</h3>
                        <span>Durango, Mexico</span>
                    </div>
                </div>
                <div>
                    <span><h2>SKILLS</h2></span>
                    <div>
                        <p>Ability to Work in a Team</p>
                        <span>● ● ● ● ●</span>
                    </div>
                    <div>
                        <p>Communication Skills</p>
                        <span>● ● ● ● ∘</span>
                    </div>
                    <div>
                        <p>Ability to Work Under Pressure</p>
                        <span>● ● ● ● ●</span>
                    </div>
                    <div>
                        <p>Visual Design Skills</p>
                        <span>● ● ● ∘ ∘</span>
                    </div>
                    <div>
                        <p>Adaptability</p>
                        <span>● ● ● ● ●</span>
                    </div>
                    <div>
                        <p>Programming</p>
                        <span>● ● ● ● ●</span>
                    </div>
                    <div>
                        <p>React Js</p>
                        <span>● ● ● ● ●</span>
                    </div>
                    <div>
                        <p>Git</p>
                        <span>● ● ● ● ●</span>
                    </div>
                    <div>
                        <p>HTML</p>
                        <span>● ● ● ● ●</span>
                    </div>
                </div>
                <div>
                    <span><h2>HOBBIES</h2></span>
                    <p>In my spare time I like to do things with Arduino, and some electronics.</p>
                </div>
                <div>
                    <span><h2>LANGUAGES</h2></span>
                    <div>
                        <p>English</p>
                        <span>● ● ● ∘ ∘</span>
                    </div>
                    <div>
                        <p>Spanish</p>
                        <span>● ● ● ● ●</span>
                    </div>
                </div>
            </aside>
            <section className={css.CV__main}>
                <article>
                    <span><h2>PROFILE</h2></span>
                    <p>I'm a Frontend developer passionate about creating innovative solutions. proficient in the use of web technologies such as JavaScript, React, HTML, CSS, etc., also a programming, music and science enthusiast, dedicated to always learning new things. I am looking for an entry position in a great company to be a hard-working asset to any team, to learn, grow and develop long-term.</p>
                </article>
                <article>
                    <h2>EXPERIENCE</h2>
                    <div>
                        <h3>Cross Port</h3>
                        <p> An application to transfer files, developed in javascript with electron, react and express.<br/>
                            https://github.com/SL0W-HAND/Cross_Port
                        </p>
                    </div>
                    <div>
                        <h3> Guitar NextJs</h3>
                        <p> 
                            web app developed with Next Js, about the best guitarists <br/>
                            https://guitar-nextjs.vercel.app/
                        </p>
                    </div>
                </article>
                <article>
                    <h2>COURSES</h2>
                    <div>
                        <h3>Platzi student</h3>
                        <p>August 2020 – Present</p>
                    </div>
                </article>
                <article>
                    <span><h2>KEY QUALIFICATIONS & RESPONSIBILITIES</h2></span>
                    <p>- Planned, developed, tested, deployed and maintained web applications.</p>
                    <p>- Provided effective troubleshooting and remediation for web applications.</p>
                    <p>- Effectively translated client requirements into application designs and systems requirements.</p>
                    <p>- Followed policies and procedures related to application methods and quality standards at all times.</p>
                </article>
            </section>           
        </main>
    )
}

export default cv
