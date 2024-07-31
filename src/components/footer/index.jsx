import githubImg from '../../assets/img/github-logo.png'
import linkedInImg from '../../assets/img/linkedin-logo.png'
import twitterImg from '../../assets/img/twitter.png'


const footerEls = [
    {
        name: 'GitHub',
        href: 'https://github.com/JakeRasmusson',
        img: githubImg
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/jacob-rasmusson-213aab2a1',
        img: linkedInImg
    },
    {
        name: 'X',
        href: 'https://x.com/jakerasmusson',
        img: twitterImg
        
    }
]

const Footer = () => {
    return (
        <div style={{height: '50px'}} className='d-flex justify-content-around fixed-bottom mh-25 w-100'>
            {footerEls.map(el => {
                return (
                    <div key={el.name} className='mh-100 text-center w-100 '>
                    <a target='_blank' className='mh-100 mw-100' href={el.href} key={el.name}>
                        <img  className='mh-100 mw-100 footer-image' src={el.img} />
                    </a>
                    </div>
                )
                    
            })}
        </div>
    )
}

export default Footer