import React, {useState, useEffect} from 'react'
import { MdDarkMode } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion"

export default function Portfolio() {

  const [theme, setTheme] = useState('')
  const [container, setContainer] = useState('')
  const [buttonTheme, setButtonTheme] = useState('')
  const [iconTheme, setIconTheme] = useState('')
  const [subTitle, setSubTitle] = useState('')

  useEffect(() => {
    const preferredDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (preferredDarkMode) {
      setIconTheme('darkIcon')
      setContainer('darkContainer')
      setButtonTheme('darkButton')
      setTheme('dark')
      setSubTitle('subDarkTitle')
    } else {
      setIconTheme('lightIcon')
      setContainer('lightContainer')
      setButtonTheme('lightButton')
      setTheme('light')
      setSubTitle('subLightTitle')
    }
  }, [])

  const changeTheme = () => {

    if (theme === "dark") {
      setIconTheme('lightIcon')
      setContainer('lightContainer')
      setButtonTheme('lightButton')
      setTheme('light')
      setSubTitle('subLightTitle')
    } else {
      setIconTheme('darkIcon')
      setContainer('darkContainer')
      setButtonTheme('darkButton')
      setTheme('dark')
      setSubTitle('subDarkTitle')
    }
  }

return (
  <motion.div
  animate={{
    opacity: [0.9,1],
  }}>
    
  
<div className= {theme}>  
  <div className={container}>
    <div className='buttonRowContainer'>
      <div className='leftButtonContainer'>
      <button className={buttonTheme} ><Link to="/WebSite"><FaArrowLeftLong className={iconTheme}/></Link></button>
      <button className={buttonTheme} onClick={ () => changeTheme()}><MdDarkMode className={iconTheme}/></button>
      </div>
      <a href='https://github.com/AatuTHu'>
        <button className={buttonTheme}><FaGithub className={iconTheme}/></button>
      </a>
    </div>
    </div>
    
    <div className="portfolioContainer">
      <div className='gridBox'>
        <div className='projectTitle'>HomeInspector <a href='https://github.com/AatuTHu/HomeInspector'><button className={buttonTheme}><FaGithub className={iconTheme}/></button></a></div>
        
        <p className={subTitle}>Smart home app where user controls a microcontroller on a mobile app</p>
       <div className='adjectiveBox'>
          <p className='adjective'>REACT NATIVE</p>
          <p className='adjective'>ESP32</p>
          <p className='adjective'>EXPRESS</p>
          <p className='adjective'>FIREBASE</p>
        </div>
      </div>

      <div className='gridBox'>
        <div className='projectTitle'>What2Watch <a href='https://github.com/KVG21/What2Watch'><button className={buttonTheme}><FaGithub className={iconTheme}/></button></a></div>
        <p className={subTitle}>Movie and series recomendation app. Get recomendation based on your likes</p>
        <div className='adjectiveBox'>
          <p className='adjective'>REACT NATIVE</p>
          <p className='adjective'>FIREBASE</p>
        </div>
      </div>

      <div className='gridBox'>
        <div className='projectTitle'>AappaChat <a href='https://github.com/AatuTHu/Aappa-chat'><button className={buttonTheme}><FaGithub className={iconTheme}/></button></a></div>
        <p className={subTitle}>Realtime chat application where users can log on to the chat site and begin to with eachother</p>
        <div className='adjectiveBox'>
          <p className='adjective'>REACT</p>
          <p className='adjective'>FIREBASE</p>
        </div>
      </div>

      <div className='gridBox'>
        <div className='projectTitle'>Web CV<a href='https://github.com/AatuTHu/WebSite'><button className={buttonTheme}><FaGithub className={iconTheme}/></button></a></div>
        <p className={subTitle}>This web CV to display skills</p>
        <div className='adjectiveBox'>
          <p className='adjective'>REACT</p>
        </div>
      </div>

  </div>
</div>
</motion.div>
)
}
