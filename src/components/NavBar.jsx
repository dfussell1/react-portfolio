import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
    const currentPage = useLocation().pathname;

    return (
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
                <Link 
                    to='/'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </Link>
            </li>
            <li className='nav-item'>
                <Link 
                    to='/projects'
                    className={currentPage === '/projects' ? 'nav-link active' : 'nav-link'}
                >
                    Projects
                </Link>
            </li>
            <li className='nav-item'>
                <Link 
                    to='/contact-me'
                    className={currentPage === '/contact-me' ? 'nav-link active' : 'nav-link'}
                >
                    Contact Me
                </Link>
            </li>
            <li className='nav-item'>
                <Link 
                    to='/resume'
                    className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </Link>
            </li>
        </ul>
    );
}