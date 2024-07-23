import dndImage from '../../assets/img/screenshot-of-homepage.png'

const projectList = [
    {
        label: 'Dungeons and Draggonites',
        href: 'https://jakerasmusson.github.io/dungeons_and_dragonites/',
        repo: 'https://github.com/JakeRasmusson/dungeons_and_dragonites',
        img: dndImage,
        alt: 'Image of DND project',
        description: ';lasdfj;oawijawie jawoi jawo ijaw; oiahweg4 ;oiah4eg ;oaiegh a;oei ha;soe h'
    },
    {
        label: '',
        href: '',
        repo: '',
        img: ''
    },
    {
        label: '',
        href: '',
        repo: '',
        img: ''
    },
    {
        label: '',
        href: '',
        repo: '',
        img: ''
    }

]







const ProjectPage = () => {
    return (
        <div className="content">
            {projectList.map(project => {
                return (
                    <div key={project.label}> 
                        <h2>{project.label}</h2>
                        <img src={project.img} alt={project.alt} ></img>
                        <h2>Description</h2>
                        <p>{project.description}</p>
                        <a href={project.repo}>Github Repository</a>
                        <a href={project.href}>Link to deployed Project</a>
                    </div>
                )
            })}
        </div>

    )
}



export default ProjectPage