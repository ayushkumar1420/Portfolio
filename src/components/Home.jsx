import './Home.css'
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <>

      <nav className='navbar'>
        <ul className='nav-items'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skill">Skill</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section id="home" className='hero'>
        <div className='text'>
          <h3 className='pt-1'>Portfolio</h3>
          <p className='text-2'>HELLO, I'M</p>

          <h1 className='text-3'>
            <span className='first'>Ayush </span><br />
            <span className='second'>Kumar</span>
          </h1>

          <p className='text-4'>
            <span className='text-5'>I'm a </span>
            <span className='text-6'>Full Stack Developer </span>
            <span className='text-7'>& </span>
            <span className='text-8'>UI/UX Designer</span>
          </p>

          <p className='p-1'>
            Crafting immersive digital experiences with cutting-edge <br /> technology.
            Turning ideas into elegant, <br />user-centered solutions.
          </p>

          <div>
            <button className='btn-1'>VIEW MY WORK</button>
            <button className='btn-2'>DOWNLOAD CV</button>
          </div>

          <div className='scroll'>
            <a>SCROLL <br />&darr;</a>
          </div>

          <div className='icons'>
            <FaGithub />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>

        <div className='my-img'>
          <img src="/my.jpeg" alt="profile" />
        </div>
      </section>

      <section id="about" className="section">
        <h1>About Me</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque necessitatibus labore fuga quidem, temporibus dolorum officia beatae nobis molestias, animi ullam debitis! Error facilis iste expedita suscipit asperiores, sunt tempore.</p>
      </section>

      <section id="skill" className="section">
        <h1>My Skills</h1>
      </section>

      <section id="projects" className="section">
        <h1>Projects</h1>
      </section>

      <section id="contact" className="section">
        <h1>Contact Me</h1>
      </section>
    </>
  )
}
export default Home  