import avatar from '../../assets/img/Ray.png'


const AboutPage = () => {
    return (
        <div className="About">
            <h1>About Me</h1>
            <div className='d-flex '>
                <div>
                    <h2>Who am I?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet quaerat ipsa magnam quae, illo nisi nobis officiis itaque vel voluptatem sunt praesentium laborum quas odio neque animi fugiat aspernatur ut!</p>
                </div>
                <img src={avatar} alt="" />
            </div>
        </div>

    )
}



export default AboutPage