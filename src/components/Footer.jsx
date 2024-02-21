import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="social-links"> 
                <li>
                    <a href="https://github.com/dfussell1" target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={65}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/dalton-fussell-838387209/" target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={65}/>
                    </a>
                </li>
            </ul>
        </footer>
    )
};

export default Footer;