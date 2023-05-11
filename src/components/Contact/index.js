import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'default_service',
                'template_9p0mtab',
                form.current,
                '45E-kFGveuYt25zS3'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again.')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'> 
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am currently seeking employment from an IT company for 
                        the summer and post graduation (May 2024). If you have a question,
                        feedback, or just want to say hello, I'd love to hear from
                        you! Use the form below to send me a message.
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required />
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Kenneth Colby Knox
                    <br />
                    Austin, Texas,
                    <br />
                    United States 
                    <br />
                    <span> cknox2468@gmail.com </span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[30.289297, -97.744608]} zoom={15}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[30.289297, -97.744608]}>
                            <Popup> You can find me around here! </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact