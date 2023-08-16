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
                    <h2 className='title1'>
                        Juni Learning, Remote Computer Science Instructor
                    </h2>
                    <p>
                        I conducted interactive Zoom lessons for students aged 8-18, 
                        covering a wide range of topics from basic data structures to applied programming. I adapted my 
                        teaching approach to meet the unique needs and interests of each student. In addition to teaching,
                        I regularly communicated with parents, keeping them informed about their child's progress.
                        I also maintained detailed records for each student, tracking their skill level
                        progression across multiple courses.
                    </p>
                    <h3 className='title2'>
                        Rigidnet LLC, Intern
                    </h3>
                    <p>
                        In my role as an intern, I successfully completed the installation of new computer
                        systems and seamlessly integrated them with the cloud infrastructure at 20 car dealerships
                        located across the DFW area. Additionally, I proactively reached out to clients to discuss
                        and implement necessary upgrades and updates to their computers and other hardware, 
                        ensuring that their systems were up-to-date and operating at optimal performance levels.
                    </p>
                    <h4 className='title3'>
                        IMC Facility Services, Project Management Intern
                    </h4>
                    <p>
                        In my role as a project manager, I actively engaged in negotiations with Chick-fil-A 
                        management teams from various locations, handling important aspects such as scheduling, 
                        pricing, and other miscellaneous logistics. Additionally, I collaborated with a dedicated
                        construction team to successfully renovate multiple restaurants, ensuring that the 
                        projects were executed efficiently and in accordance with the desired specifications.
                        woof
                    </p>        
                </div>
                <a href="https://www.google.com" className='custom-button'> RESUME </a>
            </div>
            <Loader type='ball-clip-rotate-pulse' />
        </>
    )
}

export default Experience