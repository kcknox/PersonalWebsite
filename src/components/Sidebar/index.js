/* eslint-disable jsx-a11y/anchor-is-valid */

import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoK from '../../assets/images/Klogo.png'
import LogoSubtitle from '../../assets/images/KCKNOX-name2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faHammer, faBriefcase, faFilm, faBars, faClose} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faMandalorian, faSquareGitlab} from '@fortawesome/free-brands-svg-icons'
import way from '../../assets/sounds/the-way.mp3'
import { useState } from 'react'

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);

    const playSound = () => {
        const audio = new Audio(way);
        audio.play();
    }

    return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoK} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="logosub" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}> 
            <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="experience-link" to="/experience" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHammer} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <FontAwesomeIcon 
                onClick={() => setShowNav(!showNav)}
                icon={faClose}
                color="#ffa629"
                size='3x'
                className='close-icon'
            />
        </nav>     
        <ul>
            <li>
                <a 
                    target="_blank"
                    rel="noreferrer"
                    href='https://www.linkedin.com/in/kenneth-knox-26b744261/'
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                    target="_blank"
                    rel="noreferrer"
                    href='https://github.com/kcknox'
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href='https://gitlab.com/kck51'
                >
                    <FontAwesomeIcon icon={faSquareGitlab} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a 
                    target="_blank"
                    rel="noreferrer"
                    href='https://letterboxd.com/kcknox/'
                >
                    <FontAwesomeIcon icon={faFilm} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a>
                    <FontAwesomeIcon icon={faMandalorian} color="#4d4d4e" onClick={playSound} />
                </a>
            </li>
        </ul>   
        <FontAwesomeIcon
             onClick={() => {setShowNav(!showNav);}}
            icon={faBars}
            color="#ffa629"
            size="3x"
            className='hamburger'
        />
    </div>
)}

export default Sidebar
