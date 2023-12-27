import React, {useState, useEffect} from 'react'
import profilepicture from './profilepicture.jpg'
import { MdDarkMode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export default function HomePage() {

  const [theme, setTheme] = useState('')
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [container, setContainer] = useState('')
  const [buttonTheme, setButtonTheme] = useState('')
  const [iconTheme, setIconTheme] = useState('')

  useEffect(() => {
    const preferredDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (preferredDarkMode) {
      setIconTheme('darkIcon')
      setContainer('darkContainer')
      setButtonTheme('darkButton')
      setTheme('dark')
      setTitle('darkTitle')
      setSubTitle('subDarkTitle')
    } else {
      setIconTheme('lightIcon')
      setContainer('lightContainer')
      setButtonTheme('lightButton')
      setTheme('light')
      setTitle('lightTitle')
      setSubTitle('subLightTitle')
    }
  }, [])

  const changeTheme = () => {
    console.log(theme);
    if (theme === "dark") {
      setIconTheme('lightIcon')
      setContainer('lightContainer')
      setButtonTheme('lightButton')
      setTheme('light')
      setTitle('lightTitle')
      setSubTitle('subLightTitle')
    } else {
      setIconTheme('darkIcon')
      setContainer('darkContainer')
      setButtonTheme('darkButton')
      setTheme('dark')
      setTitle('darkTitle')
      setSubTitle('subDarkTitle')
    }
  }

return (
<div className= {theme}>  
  <div className={container}>
    <div className='buttonRowContainer'>
      <button className={buttonTheme} onClick={ () => changeTheme()}><MdDarkMode className={iconTheme}/></button>
      <a href='https://github.com/AatuTHu'><button className={buttonTheme}><FaGithub className={iconTheme}/></button></a>
    </div>
    <h1 className= {title} >Aatu Huttula</h1>
      <div className='subTitle'>  
          Programmer & Electrician  
        </div>
      <img src={profilepicture} alt="profilePic"/>

      <div className='textBox'>
        <p>
          Hello, my name is Aatu, I am a software engineering student and a graduated electrician. 
          I am currently in my final year at Oulu University of Applied Sciences. During my studies, 
          I have been involved in various projects that include React web applications and React Native mobile applications. 
          With my background as an electrician turned to programmer, 
          I have excellent knowledge of both hardware and software.
          I would describe myself as a quick learner, positive, on time person, problem solver
        </p>

        <p>
          In my free time, I enjoy exercising, painting, and learning more about coding. 
        </p>
      </div>

      <h2 className={subTitle}>Education</h2>
      <div className='grid'>
          
          <p><b>Oulu University of Applied Sciences</b> 2021- , information and communication technology </p>
          <p><b>OSAO Haukipudas</b> 2015-2018, electrician 180osp</p>
      </div>

      <h2 className={subTitle}>Working history</h2>
      <div className='grid'>
        <ul>
        <p><b>V.E. Lipponen Oy 2022, 2023</b></p>
            <li>Opereting Denver Advance Elite Vertical CNC Work Center</li>
            <li>Desinging and drawing glasses with CAD software</li>
            <li>Tool maintenance</li>
            <li>Machine maintenance</li>
            <li>Use of production programs</li>
        </ul>

        <ul>
        <p><b>Hakonen Solutions Oy 2019-2021</b></p>
            <li>Installing home appliances for customers</li>
            <li>Driving a moving van</li>
            <li>Ability to handle pressure</li>
            <li>Independent work</li>
        </ul>

        <ul>
        <p><b>Sähköveikot Oy 2018-2019</b></p>
            <li>Running cables</li>
            <li>Planning</li>
            <li>Keeping track of needs</li>
            <li>Maintaining electrical safety</li>
            <li>Team work</li>
        </ul>
      </div>

  <h2 className={subTitle}>Skills</h2>
  <div className='grid'>
    
    <ul>
      <p><b>Languages</b></p>
      <li>Finnish - native speaker</li>
      <li>English - excellent</li>
      <li>Swedish - basic</li>  
    </ul>

    <ul>
      <p><b>Programming languages</b></p>
      <li>JavaScript</li>
      <li>TypeScript</li>
      <li>Python</li>
      <li>C++</li>
    </ul>

    <ul>
      <p><b>Frontend</b></p>
      <li>React-native</li>
      <li>React</li>
      <li>Angular</li>
      <li>Html</li>
      <li>CSS</li>
    </ul>

    <ul>
      <p><b>Backend & databases</b></p>
      <li>Express.js</li>
      <li>MySQL</li>
      <li>Firebase</li>
    </ul>

    <ul>
      <p><b>Others</b></p>
      <li>PC building</li>
      <li>Car maintenance</li>
      <li>Ability to read and understand electrical drawings</li>
    </ul>
  </div>
  </div>
    <div>
  </div>
</div>
)
}
