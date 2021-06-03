import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import css from '@styles/Home.module.scss'




const Navbar = () => {
    const [Style, setStyle] = useState('')

    
    function dropDown(){
        if (Style=='') {
            setStyle(css.display)
        } else {
            setStyle('')
        }
    }

    
    
    return (
        <nav className={css.Navbar}>
            <Link  href="/">
                <a className={css.logo}>
                    <span>DC</span>
                </a>
            </Link>
            <ul className={Style}>
                <li>
                    <Link href="/projects">
                        <a>Projects</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
                <li>
                    <Link href="/cv">
                        <a>CV</a>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/daniel-carrete-guzmán-737041205">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size='1x' />
                    </Link> 
                </li>
                <li>
                    <Link href="https://github.com/SL0W-HAND">
                        <FontAwesomeIcon icon={['fab', 'github']} size='1x' />
                    </Link>
                </li> 
            </ul>
            <input className={css.checkbox} id="nav-toggle" type="checkbox"/>
            <label onClick={dropDown} for="nav-toggle" className={css.icon_burger}>
		        <div className={css.line}></div>
		        <div className={css.line}></div>
		        <div className={css.line}></div>
	        </label>
        </nav>
    )
}

export default Navbar
