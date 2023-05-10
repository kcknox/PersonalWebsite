/* eslint-disable jsx-a11y/anchor-is-valid */

import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoK from '../../assets/images/Klogo.png'
import LogoSubtitle from '../../assets/images/KCKNOX-name2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faHammer, faBriefcase, } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faMandalorian} from '@fortawesome/free-brands-svg-icons'
import way from '../../assets/sounds/the-way.mp3'

const Sidebar = () => {

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
        <nav>
            <NavLink exact="true" activeclassname="active" to="/" >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="experience-link" to="/experience" >
                <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects" >
                <FontAwesomeIcon icon={faHammer} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
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
                <a>
                    <FontAwesomeIcon icon={faMandalorian} color="#4d4d4e" onClick={playSound} />
                </a>
            </li>
        </ul>
    </div>
)}

export default Sidebar
