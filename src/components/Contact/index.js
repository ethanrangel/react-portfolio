import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet'


const Contact = () => {
    const[letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        emailjs.init({
            publicKey: 'CIaBQMzGmzfVS-d0f',
        })
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_2u9jcgq',
                'template_hv416jo',
                refForm.current
            )

            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
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
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15} 
                    />
                </h1>
                <p>
                    I am interested in any opportunities. Feel free to reach out to me any time!
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Ethan Rangel-Torres,
                <br />
                The University of North Carolina at Charlotte,
                <br />
                9201 University City Blvd,
                <br />
                Charlotte, NC 28223
                <br />
                <span>ethanrangel13@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[35.306274, -80.734436]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[35.306274, -80.734436]}>
                        <Popup>
                            Ethan Rangel goes to school here!
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman" />
    </>
    )
}

export default Contact