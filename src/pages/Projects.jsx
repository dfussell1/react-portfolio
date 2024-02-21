import careerCache from '../assets/career-cache.png';
import eeriePapers from '../assets/Eerie-Papers.png';
import gameCalender from '../assets/game-release-calendar.png';
import workdayPlanner from '../assets/workday-planner1.png';
import weatherDashboard from '../assets/weather-dashboard.png';
import jsQuiz from '../assets/jsquiz.png';

export default function Projects() {
    return (
        <div>
            <h1 className="projects-header">My Projects:</h1>

            <div className="projects-content">
                <div className='project-card'>
                    <a href="https://eerie-papers-08c108f5d3a3.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src={eeriePapers} alt="Picture of Eerie Papers Project" width={500} height={300}/>
                    </a>
                </div>
                <div className='project-card'>
                    <a href="https://career-cache.onrender.com/" target="_blank" rel="noopener noreferrer">
                    <img src={careerCache} alt="Picture of Career Cache Project" width={500} height={300}/>
                    </a>
                </div>
                <div className='project-card'>
                    <a href="https://iambryantran.github.io/game-release-calendar/" target="_blank" rel="noopener noreferrer">
                    <img src={gameCalender} alt="Picture of Game Release Calendar Project" width={500} height={300}/>
                    </a>
                </div>
                <div className='project-card'>
                    <a href="https://dfussell1.github.io/workday-planner/" target="_blank" rel="noopener noreferrer">
                    <img src={workdayPlanner} alt="Picture of Workday Planner Project" width={500} height={300}/>
                    </a>
                </div>
                <div className='project-card'>
                    <a href="https://dfussell1.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer">
                    <img src={weatherDashboard} alt="Picture of Weather Dashboard Project" width={500} height={300}/>
                    </a>
                </div>
                <div className='project-card'>
                    <a href="https://dfussell1.github.io/challenge-four-coding-quiz/" target="_blank" rel="noopener noreferrer">
                    <img src={jsQuiz} alt="Picture of JavaScript Quiz Project" width={500} height={300}/>
                    </a>
                </div>
            </div>
        </div>
    );
}