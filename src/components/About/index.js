import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faPython, faGithub, faAws} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { faDatabase, faLeaf } from '@fortawesome/free-solid-svg-icons'

const About = () => {

    const[letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
    <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15} 
                    />
                </h1>
                <p>
                    I am a cybersecurity-focused Computer Science student at UNC Charlotte, currently interning as a Cloud Engineer at Stratascale. I have hands-on experience with AWS Glue, AWS CDK, and CI/CD pipelines. Previously, I interned at Astro AI Trading, where I collaborated with senior developers to enhance cybersecurity measures.
                </p>
                <p>I hold certifications as a Google Cyber Security Professional and AWS Cloud Practitioner. My technical skills include Python, Java, JavaScript, TypeScript, SQL, C/C++, and Linux. I am passionate about safeguarding digital assets and enhancing software resilience through innovative solutions in cybersecurity and cloud engineering.
                </p>
            </div>


            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} color="#306998"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faAws} color="#FF9900"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faDatabase} color="#D32F2F"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faLeaf} color="#6DB33F"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#F0DB4F"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGithub} color="#181717"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
    </>
    )
}

export default About