import resume from '../../assets/img/jacob-rasmusson-resume.pdf'
const jakesSkills = [
    'Javascript',
    'CSS',
    'HTML',
    'Typescript',
    'SQL',
    'MongoDB',
    'Jquery',
    'Node',
    'ExpressJS'
]

const ResumePage = () => {
    return (
        <div className="About d-flex justify-content-around p-5">
            <div className='text-center'>
            <h1 className='text-center'>WebDev Know How</h1>
            <a href={resume} download>Download My Resume</a>
            <ul>
            {jakesSkills.map(skill => {
                return <li key={skill} >{skill}</li>
            })}
            </ul>
            </div>
        </div>

    )
}



export default ResumePage