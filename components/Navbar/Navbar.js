import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import css from '@styles/Home.module.scss'




const Navbar = () => {
    const [Style, setStyle] = useState('')

    const [Check, setCheck] = useState(false)
    
    function dropDown(){
        if (Style=='') {
            setStyle(css.display)
            setCheck(true)
        } else {
            setStyle('')
            setCheck(false)
        }
    }

    function reset(){
        setStyle('')
        setCheck(false)
    }
    
    return (
        <nav className={css.Navbar}>
            <Link  href="/">
                <a className={css.logo} onClick={reset}>
                    <span>DC</span>
                </a>
            </Link>
            <ul className={Style}>
                <li>
                    <Link href="/projects" >
                        <a onClick={reset}>Projects</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a onClick={reset}>Contact</a>
                    </Link>
                </li>
                <li>
                    <Link href="/cv">
                        <a onClick={reset}>CV</a>
                    </Link>
                </li>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/daniel-carrete-guzmán-737041205">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size='1x' />
                    </a> 
                </li>
                <li>
                    <a target="_blank" href="https://github.com/SL0W-HAND" >
                        <FontAwesomeIcon icon={['fab', 'github']} size='1x' />
                    </a>
                </li> 
            </ul>
            <input className={css.checkbox} id="nav-toggle" type="checkbox" checked={Check}/>
            <label onClick={dropDown} for="nav-toggle" className={css.icon_burger}>
		        <div className={css.line}></div>
		        <div className={css.line}></div>
		        <div className={css.line}></div>
	        </label>
        </nav>
    )
}

export default Navbar
