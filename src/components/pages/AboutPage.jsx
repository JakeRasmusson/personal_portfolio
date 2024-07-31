import avatar from '../../assets/img/Ray.png'


const AboutPage = () => {
    return (
        <div className="About w-100 p-5">
            <h2 className='text-center m-2 p-2'>About Me</h2>
            <div className='d-flex justify-content-around mw-100'>
                <div className='d-flex flex-row justify-content-between mw-75'>
                    <div className='mw-50 text-center'>
                        <h2>Who am I?</h2>
                        <p>Hello, I am Jacob Rasmusson a Web Developer from South East Wisconsin.  When not developing I enjoy cooking, and being outdoors.  If you have a project you'd like to work on please contact me.</p>
                    </div>
                    <div className='w-50 text-center'>
                        <img src={avatar} alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}



export default AboutPage