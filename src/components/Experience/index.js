import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from 'react';

const Experience = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        document.title = 'kcknox - Experience';
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
                    <h2 className='title0'>
                        Adom, Software Engineer
                    </h2>
                    <p>
                        Software engineer working full-stack on a variety of projects.
                    </p>
                    <h3 className='title1'>
                        Upwork - Enterprise Talent Solutions Branch, AI Training Engineer
                    </h3>
                    <p>
                        In my role, I leveraged advanced reinforcement 
                        and supervised learning techniques to enhance AI model efficiency significantly. I led AI model 
                        training initiatives for top-tier companies, steering projects 
                        that consistently placed these organizations within the top 10% 
                        of the industry. Additionally, I was responsible for the data cleaning of large databases, 
                        involving over 50,000 records.
                    </p>
                    <h4 className='title2'>
                    Juni Learning, Remote Computer Science Instructor
                    </h4>
                    <p>
                        I conducted interactive Zoom lessons for students aged 8-18, 
                        covering a wide range of topics from basic data structures to applied programming. I adapted my 
                        teaching approach to meet the unique needs and interests of each student. In addition to teaching,
                        I regularly communicated with parents, keeping them informed about their child's progress.
                        I also maintained detailed records for each student, tracking their skill level
                        progression across multiple courses.
                    </p>
                    <h5 className='title3'>
                        Rigidnet LLC, Technical Intern
                    </h5>
                    <p>
                        In my role as an intern, I successfully completed the installation of new computer
                        systems and seamlessly integrated them with the cloud infrastructure at 20 car dealerships
                        located across the DFW area. Additionally, I proactively reached out to clients to discuss
                        and implement necessary upgrades and updates to their computers and other hardware, 
                        ensuring that their systems were up-to-date and operating at optimal performance levels.
                    </p>        
                </div>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1q0oSG5DKiC49VZbCNE0Hq7gF2GGzbrmd/view?usp=sharing" className='custom-button'> RESUME </a>
            </div>
            <Loader type='ball-clip-rotate-pulse' />
        </>
    )
}

export default Experience