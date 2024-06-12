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
                    <h3 className='proj3'> Racing Raisins </h3>
                    <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/D9rvslA83-U?si=j1qb9l1aGCJQiO82" className='demo1'> Demo Video </a>
                    <p>
                        Designed and development of an innovative arcade-style racing 
                        game with a team of 4 others. 
                        Leveraging Unreal Engine 5 and C++, we created a dynamic 
                        gaming experience that features both online networking capabilities
                        and AI opponents. My responsibilities extended beyond 
                        programming to include music, sound, and map design. We effectively coordinated team efforts through GitLab Issues,
                        managing tasks and tracking progress, while also using Discord to facilitate 
                        real-time communication and problem-solving discussions.
                        This project not only honed my technical skills but also enhanced my 
                        capabilities in project management and teamwork within a high-stakes development environment.


                    </p>
                    <h5 className='proj5'> BookHunter Website </h5>
                    <a target="_blank" rel="noopener noreferrer" href="https://gitlab.com/bookhunters/bookhunter" className='repo'> Repository </a>
                    <p>
                        Collaborated within a team to craft a dynamic website showcasing 
                        books, authors, and book genres, reminiscent of the style seen on IMDb. 
                        As a key contributor to the frontend development with occasional 
                        assistance with the backend, I orchestrated the presentation of data sourced from backend APIs. 
                        The frontend was constructed employing technologies 
                        such as React JS, Bootstrap, and HTML, while the backend operations were facilitated by Python and Django.
                    </p>
                    <h2 className='proj1'> F1/10 Autonomous Car </h2>
                    <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/D3qaYWlWXmY" className='demo'> Demo Video </a>
                    <p>
                        Worked collaboratively within a team to develop the software 
                        for an F1/10 car, equipped with both a LiDAR scanner and a camera. 
                        Leveraged the capabilities of the OpenCV library and C++ to 
                        create a simulation of an autonomous vehicle. 
                        Noteworthy functionalities included responsive acceleration 
                        upon identification of a green circle by the camera, 
                        deceleration upon detecting a yellow circle, and immediate 
                        cessation of movement in the detection of a red circle or if 
                        the circle got too close to the scanner. Additionally, 
                        the car demonstrated adaptive turning mechanisms, adjusting 
                        its direction based on its position relative to the camera's perspective.
                    </p>
                    
                    <h2 className='proj2'> Reddit Android App </h2>
                    <p>
                        Developed an app in Android Studio using Kotlin and which pulled posts and subreddits 
                        from the Reddit API and displayed them. Allowed users to search key words in posts
                        and subreddits as well as switch between subreddits. The app also allowed
                        users to favorite posts and view them in a separate tab. 
                    </p>
                    <h4 className='proj4'> Machine Learning Projects </h4>
                    <p>
                        Implemented numerous machine learning algorithms from scratch in Python,
                        including Decision Trees, Nearest Neighbor, Naïve Bayes, 
                        K-Means, DBSCAN, Hierarchal Clustering, and Apriori.
                    </p>
                </div>
            </div>
            <Loader type='ball-clip-rotate-pulse' />
        </>
    )
}

export default Projects