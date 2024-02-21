import logo from '../assets/profile.jpg';

export default function AboutMe() {
    return (
        <div>
            <h1 className="about-me-header">About Me</h1>
            <img className='profile-icon' src={logo} width={100} height={100} alt="profile-icon" />
            <p className='about-me-body'>
                Hey there! My name is Dalton Fussell and I am a learning full-stack developer from Nashville, TN! I recently graduated from a coding bootcamp
                hosted by Vanderbilt University and EdX in February of 2024. I also have an Associate's degree in Science from Austin Peay State 
                University where I was pursuing Business Management, but I decided that was not at all what I wanted to do. After two years of college,
                I tested my skills in the electrical/construction industry where I joined an apprenticeship for a year, which I did enjoy, but I think
                I found something that better fits me. Now I spend my days learning all that I can about coding, programming, and web development so that 
                I can continue building my portfolio with some cool, new projects! 
            </p>
        </div>
    );
}