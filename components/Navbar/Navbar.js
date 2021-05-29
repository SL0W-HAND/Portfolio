import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import css from '@styles/Home.module.scss'




const Navbar = () => {
    return (
        <nav className={css.Navbar}>
            <Link  href="/">
                <a>
                    <span>DC</span>
                </a>
            </Link>
            <ul>
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
                    <Link href="/cz">
                        <FontAwesomeIcon icon={['fab', 'github']} size='1x' />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
