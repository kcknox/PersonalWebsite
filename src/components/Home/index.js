import { Link } from 'react-router-dom';
import LogoK from '../../assets/images/Klogo.png'
import './index.scss'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
//import Test from '../../assets/images/KOutline2.png'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const firstNameArray = [' ', 'K', 'e', 'n', 'n', 'e', 't', 'h', ' ']
    const lastNameArray = ['n', 'o', 'x', ',']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.']

    useEffect(() => {
        document.title = 'kcknox - Home';
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3500)
        return () => {
                    clearTimeout(timeoutId)
            }
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span> 
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>{"'"}m</span>
                    
                    <AnimatedLetters letterClass={letterClass} strArray={firstNameArray} idx={15} />
                    <img src={LogoK} alt="developer" className="spacing" />
                    <AnimatedLetters letterClass={letterClass} strArray={lastNameArray} idx={24} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={27} />
                </h1>
                <h2> Software Engineer @ Adom Industries Inc.</h2>
                <Link to="/contact" className='flat-button'> CONTACT ME </Link>
            </div>
            <img src={LogoK} alt="K" className="logo" />
        </div>
        <Loader type="ball-clip-rotate-pulse" />
        </>
    );
}

export default Home