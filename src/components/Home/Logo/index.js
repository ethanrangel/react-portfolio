import './index.scss';
import LogoE from '../../../assets/images/logo-e.png'; // Ensure the image path is correct
import { useEffect, useRef } from 'react';

const Logo = () => {
    const bgRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        const bgElement = bgRef.current;
        const solidLogoElement = solidLogoRef.current;

        // Trigger the CSS animations
        setTimeout(() => {
            bgElement.classList.add('visible');
        }, 0);

        setTimeout(() => {
            solidLogoElement.classList.add('visible');
        }, 2500); // Adjust delay to match the desired timing
    }, []);

    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} className="solid-logo" src={LogoE} alt="E" />
        </div>
    );
}

export default Logo;

