import avatar from '../../assets/img/Ray.png'


const AboutPage = () => {
    return (
        <div className="About w-100">
            <h2 className='text-center m-2'>About Me</h2>
            <div className='d-flex justify-content-around w-100'>
                <div className='d-flex flex-row justify-content-between w-75'>
                    <div className='w-50 text-center'>
                        <h2>Who am I?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet quaerat ipsa magnam quae, illo nisi nobis officiis itaque vel voluptatem sunt praesentium laborum quas odio neque animi fugiat aspernatur ut!</p>
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