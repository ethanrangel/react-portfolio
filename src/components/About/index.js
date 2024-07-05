import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faAngular, faCss3, faGitAlt, faHtml5, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

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
                    I am a dedicated student with a passion for cybersecurity and safeguarding digital assets. While currently pursuing a Bachelor's degree in Computer Science specializing in Cybersecurity at UNC Charlotte, along with a completed Associate's degree from CPCC, I bring a solid foundation to the table.
                </p>
                <p>
                    Currently, I'm gaining hands-on experience as an intern at Stratascale, an SHI company, delivering cybersecurity software solutions. I focus on enhancing software resilience through automation and monitoring within cloud infrastructure. Previously, as a Cyber Security Intern at Astro AI Trading, I collaborated with senior developers to strengthen cybersecurity measures and researched to develop a foundational knowledge in cybersecurity techniques and tools.
                </p>
                <p>
                    I hold certifications as a Google Cyber Security Professional and AWS Cloud Practitioner. My technical skills span across various programming languages and tools, including Python, Java, JavaScript, C++, C, SQL, and Linux. Additionally, I have conceptual knowledge in VPC, AWS CDK, AWS CLI, IaC, and ETL Pipelines.
                </p>
            </div>


            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
    </>
    )
}

export default About