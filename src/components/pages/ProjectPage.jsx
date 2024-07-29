import dndImage from "../../assets/img/screenshot-of-homepage.png";
import cryptidImage from '../../assets/img/cryptid-spot-image.png'
import pwaImage from '../../assets/img/progressive-web-app-image.png'
import weatherAppImage from '../../assets/img/weather-app-image.png'
import taskBoardImage from '../../assets/img/task-board-image.png'

const projectList = [
  {
    label: "Dungeons and Draggonites",
    href: "https://jakerasmusson.github.io/dungeons_and_dragonites/",
    repo: "https://github.com/JakeRasmusson/dungeons_and_dragonites",
    img: dndImage,
    alt: "Image of DND project",
    description:
      "Our esteemed group embarked on a noble quest: to craft a gaming masterpiece leveraging the prowess of two distinct API calls. With unwavering determination, we chose to harness the mystical energies of the DND5EAPI and the enchanting allure of the Pokeapi. As the curtains rise on our digital stage, players are bestowed with a divine gift: a whimsical Pokémon from the hallowed annals of the original 151 creatures.",
  },
  {
    label: "Cryptid Spot",
    href: "https://cryptid-spot.onrender.com/",
    repo: "https://github.com/AranosBanazir/cryptid-spot",
    img: cryptidImage,
    alt: 'Image of Cryptidspot project',
    description: 'A place where all Cryptid enthusiasts can come together and share their knowledge of local cryptid fauna'
  },
  {
    label: 'Full Stack Tech Blog',
    href: 'https://jake-tech-blog.onrender.com',
    repo: 'https://github.com/JakeRasmusson/full-stack-blog',
    img: '',
    alt: 'Image of full stack blog',
    description: 'A full stack web blog using handlebars for HTML templating and PostgresSQL/Sequelize ORM for the Database'
  },
  {
    label: 'Progressive Web App',
    href: 'https://progressive-web-app-iw31.onrender.com/',
    repo: 'https://github.com/JakeRasmusson/progressive_web_app',
    img: pwaImage,
    alt: 'Image of Progressive Web app',
    description: 'A in browser text editor that is also a full progressive web app.  It has the capability to be used offline, and can be installed on mobile or desktop by using the install button'
  },
  {
    label: 'Weather App',
    href: 'https://jakerasmusson.github.io/weather_app/',
    repo: 'https://github.com/JakeRasmusson/weather_app',
    img: weatherAppImage,
    alt: 'Image of weather app',
    description: 'A place where you can save local cities for quick weather referencing'
  },
  {
    label: 'Kanban Task Board',
    href: 'https://jakerasmusson.github.io/task_board/',
    repo: 'https://github.com/JakeRasmusson/task_board',
    img: taskBoardImage,
    alt: 'Image of task board app',
    description: 'A Kanban taskboard for organizing the tasks you currently have.'
  }
];

const ProjectPage = () => {
  return (
    <div className="content my-5">
      <h2 className="text-center">My projects</h2>
      {projectList.map((project) => {
        return (
          <div className="row mw-100 my-5 py-5" key={project.label}>
            <div className="col-6 text-center">
              <img className="w-75" src={project.img} alt={project.alt}></img>
            </div>
            <div className="col-6 text-center d-flex flex-column justify-content-between ">
              <div className="">
                <h2 className="mb-3">{project.label}</h2>
                <p>{project.description}</p>
              </div>
              <div className="d-flex justify-content-around ">
                <a href={project.repo}>
                  <button className="btn btn-primary">Github Repository</button>
                </a>
                <a href={project.href}>
                  <button className="btn btn-primary">Deployed Project</button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectPage;
