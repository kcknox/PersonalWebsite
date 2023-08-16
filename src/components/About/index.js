import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import head from "../../assets/images/Headshot.jpg";
import room from "../../assets/images/room.jpg";
import cousin from "../../assets/images/cousins.jpg"
import chess from "../../assets/images/chess.jpg"
import max from "../../assets/images/maxChair.jpg"
import gary from "../../assets/images/garyTough.jpg"
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    return (
    <>
        <div className="container about-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                    idx={15}
                />
            </h1>
            <p>
                Hi! My name is Kenneth Knox, but you can call me Colby. I'm a 4th
                year computer science student at the University of Texas at Austin
                and a very ambitious software engineer. I am currently
                looking for a role in an established IT company for the oppurtunity
                to work on challenging and diverse projects.
            </p>
            <p>
                I have a passion for front-end development and all things creative.
                I have developed a strong skill set in Java, Python, C, C++, JavaScript,
                and React JS throughout my computer science career.
            </p>
            <p>
                I love collaborating with others and am always excited to learn new things.
                When I'm not studying or working, you can usually find me hanging out with friends,
                watching a movie or sports, doing something outdoors, or beating my roommates in chess.
            </p>
            <p>
                Thanks for stopping by!
            </p>
        </div>

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <img src={head} alt="1" />
                </div>
                <div className='face2'>
                    <img src={room} alt="2" />
                </div>
                <div className='face3'>
                    <img src={gary} alt="3" />
                </div>
                <div className='face4'>
                    <img src={cousin} alt="4" />
                </div>
                <div className='face5'>
                    <img src={max} alt="5" />
                </div>
                <div className='face6'>
                    <img src={chess} alt="6" />
                </div>
            </div>
        </div>
        </div>
        <Loader type="ball-clip-rotate-pulse" />
    </>
    )
};

export default About