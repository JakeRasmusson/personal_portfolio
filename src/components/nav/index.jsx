import { NavLink } from "react-router-dom"


const navEls = [
    {
        name: 'About',
        href: '/'
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
        <div className="d-flex justify-content-around w-25 align-items-center">
            {navEls.map(navEl => {
                return <NavLink className={({ isActive }) => `btn btn-${isActive? 'info' : 'primary'}`} to={navEl.href} key={navEl.name}>{navEl.name}</NavLink>
            })}

        </div>
    )
}

export default nav