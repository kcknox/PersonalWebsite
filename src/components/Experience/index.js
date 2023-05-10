import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from 'react';

const Experience = () => {
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
            <div className='container contact-page'> 
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                            idx={15}
                        />
                    </h1>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Experience