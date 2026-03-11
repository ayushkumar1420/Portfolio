import './Projects.css'
import { NavLink } from 'react-router-dom'

export default function Project() {
  return (
<section>
       <nav className='navbar'>
         <ul className='nav-items'>
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/skill" className={({ isActive }) => isActive ? "active" : ""}>
                Skill
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                Contact
              </NavLink>
            </li>
         </ul>
       </nav>
    </section>
  );
}