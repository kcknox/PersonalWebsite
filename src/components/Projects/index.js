import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from 'react';
//import car from "../../assets/images/F110_Car.jpeg"


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
                    <h5 className='proj5'> BookHunter Website </h5>
                    <a target="_blank" rel="noopener noreferrer" href="https://gitlab.com/bookhunters/bookhunter" className='repo'> Repository </a>
                    <p>
                        Collaborated within a team to craft a dynamic website showcasing 
                        books, authors, and book genres, reminiscent of the style seen on IMDb. 
                        As a key contributor to the frontend development with occasional 
                        assistance with the backend, I orchestrated the presentation of data sourced from backend APIs. 
                        The frontend was meticulously constructed employing technologies 
                        such as React JS, Bootstrap, and HTML, while the backend operations were facilitated by Python
                    </p>
                    <h2 className='proj1'> F1/10 Autonomous Car </h2>
                    <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/D3qaYWlWXmY" className='demo'> Demo Video </a>
                    <p>
                        Worked collaboratively within a team to develop the software 
                        for an F1/10 car, equipped with both a LiDAR scanner and a camera. 
                        Leveraged the capabilities of the OpenCV library and C++ to 
                        create a sophisticated simulation of an autonomous vehicle. 
                        Noteworthy functionalities included responsive acceleration 
                        upon identification of a green circle by the camera, controlled 
                        deceleration upon detecting a yellow circle, and immediate 
                        cessation of movement in the presence of a red circle or if 
                        the circle approached the scanner's vicinity. Additionally, 
                        the car demonstrated adaptive turning mechanisms, adjusting 
                        its direction based on its position relative to the camera's perspective.
                    </p>
                    <h3 className='proj3'> Machine Learning Projects</h3>
                    <p>
                        Implemented numerous machine learning algorithms from scratch in Python,
                        including Decision Trees, Nearest Neighbor, Naïve Bayes, 
                        K-Means, DBSCAN, Hierarchal Clustering, and Apriori.
                    </p>
                    <h2 className='proj2'> Pintos Toy Operating System</h2>
                    <p>
                        Teamed up with peers to enhance a Linux-based toy operating system, 
                        incorporating advanced features such as priority scheduling, 
                        stack-based argument passing, and the integration of user program 
                        system calls. Additionally, seamlessly integrated virtual memory, 
                        while also transforming the pre-existing single-thread file 
                        system into a more intricate multi-level indexed file system, 
                        all accomplished through coding in C.
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
                </div>
            </div>
            <Loader type='ball-clip-rotate-pulse' />
        </>
    )
}

export default Projects