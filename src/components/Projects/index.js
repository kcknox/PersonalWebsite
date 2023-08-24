import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from 'react';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        document.title = 'kcknox - Projects';
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
                            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={15}
                        />
                    </h1>
                    <h2 className='title1'> F1/10 Autonomous Car </h2>
                    <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/D3qaYWlWXmY" className='demo'> Demo Video </a>
                    <p>
                        Self driving car
                    </p>
                    <h2 className='title2'> Pintos </h2>
                    <p>
                        OS
                    </p>
                    <h3 className='title3'> Huffman </h3>
                    <p>
                    Designed and executed a robust data compression solution by 
                    implementing the Huffman coding algorithm. The project yielded 
                    substantial reductions in file sizes while ensuring the utmost
                    data integrity. Leveraged Java programming to meticulously 
                    craft encoding and decoding functionalities, utilizing data 
                    structures such as..... . This achievement
                    not only underscored my ability to optimize complex processes
                    but also demonstrated my proficiency in utilizing programming 
                    languages to solve real-world challenges effectively
                    </p>
                </div>
            </div>
            <Loader type='ball-clip-rotate-pulse' />
        </>
    )
}

export default Projects