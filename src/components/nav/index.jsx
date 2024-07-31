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
        name: 'Resume',
        href: '/resume'
    }
]


function nav() {

    
    return (
        <ul className="navbar-nav">
            {navEls.map(navEl => {
                return ( <li key={navEl.name} className="nav-item p-2 " >
                    <NavLink className={({ isActive }) => `btn btn-${isActive? 'info' : 'primary'}`} to={navEl.href} key={navEl.name}>{navEl.name}</NavLink>
                </li>
             )
            })}

        </ul>
    )
}

export default nav