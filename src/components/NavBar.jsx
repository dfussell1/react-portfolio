import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
    const currentPage = useLocation().pathname;

    return (
        <ul className='navigation'>
            <li className='about-me'>
                <Link 
                    to='/'
                    className={currentPage === '/' ? 'active' : 'nav-link'}
                >
                    About Me
                </Link>
            </li>
            <li className='projects'>
                <Link 
                    to='/projects'
                    className={currentPage === '/projects' ? 'active' : 'nav-link'}
                >
                    Projects
                </Link>
            </li>
            <li className='contact-me'>
                <Link 
                    to='/contact-me'
                    className={currentPage === '/contact-me' ? 'active' : 'nav-link'}
                >
                    Contact Me
                </Link>
            </li>
            <li className='resume'>
                <Link 
                    to='/resume'
                    className={currentPage === '/resume' ? 'active' : 'nav-link'}
                >
                    Resume
                </Link>
            </li>
        </ul>
    );
}