import { NavLink } from "react-router-dom"


const contactMethods = [
    {
        name: 'About',
        href: '/about'
    },
    {
        name: 'Contact',
        href: '/contact'
    },
    {
        name: 'Projects',
        href: '/projects'
    },
    {
        name: 'resume',
        href: '/resume'
    }
]


function nav() {

    
    return (
        <div>
            {contactMethods.map(contactMethod => {
                return <a href={contactMethod.href} key={contactMethod.name} >{contactMethod.name}</a>
            })}

        </div>
    )
}

export default nav