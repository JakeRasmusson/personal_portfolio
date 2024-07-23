import resume from '../../assets/img/jake-resume.png'


const ResumePage = () => {
    return (
        <div className="About d-flex justify-content-around">
            <div>
            <h1>Resume</h1>
            <img alt='Picture of Resume' src={resume}></img>
            </div>
        </div>

    )
}



export default ResumePage