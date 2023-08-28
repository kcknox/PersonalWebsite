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
                    <h2 className='proj1'> F1/10 Autonomous Car </h2>
                    <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/D3qaYWlWXmY" className='demo'> Demo Video </a>
                    <p>
                        Self driving car
                    </p>
                    <h2 className='proj2'> Pintos Toy Operating System</h2>
                    <p>
                        OS
                    </p>
                    <h3 className='proj3'> Machine Learning Projects</h3>
                    <p>
                        Coded ML in Python
                    </p>
                    <h4 className='proj4'> Huffman Compression Algorithm</h4>
                    <p>
                    Designed and executed a robust data compression solution with
                    an intuitive Graphical User Interface (GUI) by 
                    implementing the Huffman coding algorithm. The project yielded 
                    substantial reductions in file sizes while ensuring the utmost
                    data integrity. Leveraged Java programming to meticulously 
                    craft encoding and decoding functionalities, utilizing data 
                    structures such as binary trees, priority queues and HashMaps.
                    </p>
                    <h5 className='proj5'> BookHunter Website </h5>
                    <p>
                        Full stack engineered a website. Found on GitLab.
                    </p>
                </div>
            </div>
            <Loader type='ball-clip-rotate-pulse' />
        </>
    )
}

export default Projects