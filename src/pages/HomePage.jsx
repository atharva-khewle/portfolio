import React, { useEffect, useState } from 'react'
import './HomePage.css'

class ProjectItem {
  constructor(heading, stack, content, link, path) {
      this.heading = heading;
      this.stack = stack;
      this.content = content;
      this.link = link;
      this.path = path;
  }
}

const projectList = [
  new ProjectItem(
      "OrionView",
      "MERN, RESTful Api",
      "- Explore a wide array of movies and series, tailored to diverse tastes.<br/>- Indulge in personalized viewing experiences.<br/>- Efficiently organize and track your watchlist with ease.<br/>- Engage with interactive features for enhanced content enjoyment.<br/>- Experience secure and seamless data access through RESTful API integration.",
      "https://github.com/atharva-khewle/OrionView/",
      "./src/assets/orionview.png"
  ),
  new ProjectItem(
      "OrionHub",
      "Kotlin, FireBase",
      "- Engage in real-time interactions within our robust community.<br/>- Dive into focused discussions and easy content sharing with customizable Subreddits.<br/>- Express freely in text, photo, and video with versatile post formats.<br/>- Enjoy deeper interaction through threaded comments.<br/>- Showcase activities and connect with users via personalized profiles.<br/>- Chat instantly in one-on-one or group settings with media sharing.",      "https://github.com/atharva-khewle/OrionHub",
      "./src/assets/orionhub.png"
  ),
  new ProjectItem(
      "Chat Website",
      "React, Firebase, Tailwind CSS",
      "- Dive into diverse chat rooms for group or one-on-one conversations.<br/>- Enhance your chat experience with easy media sharing of videos and images.<br/>- Flexibility at your fingertips: login with Google or enter anonymously.<br/>- Tailor your experience with a personalized dashboard and settings.",
      "https://github.com/atharva-khewle/chat_website",
      "./src/assets/chat_website.png"

  ),
  new ProjectItem(
      "Chat App",
      "Flutter, FireBase",
      "- Create an account or log in seamlessly with Google authentication.<br/>- Engage in one-on-one or group chats with easy group creation.<br/>- Share text and image-based status updates to express yourself.<br/>- Personalize your profile with username, photo, bio, and more.<br/>- Ensure data security with robust authentication and encryption.<br/>- Share multimedia content and enjoy video/audio calls.<br/>- Collaborate seamlessly with screen sharing during calls.",      "https://github.com/atharva-khewle/Chat_App",
      "./src/assets/orionchat.jpg"

  ),
  new ProjectItem(
      "Notes",
      "Flutter",
      "- Manage tasks: create, edit, delete, mark complete.<br/>- Set deadlines, reminders to stay on track.<br/>- Access tasks, appointments offline for productivity.<br/>- Integrate appointments directly from the app.<br/>- View tasks, appointments, and events in various calendar views for easy planning.",
      "https://github.com/atharva-khewle/Notes_task_app",
      "./src/assets/notes.png"
  )
];
// // Displaying each project
// projectList.forEach(project => project.display());


export const HomePage = () => {
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ratio]);
  
  
  
  return (
    <div style={{backgroundColor:""}} className='Homepage'>
    {/* <iframe src="./../iframe/waves.html" frameborder="0" className='iframeWave'></iframe> */}
      <div className="upperspace"></div>
      <div className="backpspace">        
      <div className="uppertextspace"></div>
    <div className="text"
       style={
        {
          fontSize:ratio>=1?"100px":"50px",
          paddingTop:ratio>=1?"0px":"30px",
      }
      }
    >
      Hi,<br></br>
      Atharva here!<br></br>
      </div>
      </div>
    <div className="centerIframe">
    <iframe src="./../iframe/vanta.html" 
    style={
      {scale:ratio>=1?"0.9":"0.45"
      ,left: ratio>=1?"0":"-230px"
      ,top: ratio>=1?"90px":"130px"
    }
    }
    frameborder="0" 
    className='iframeTrunk'
    ></iframe>

    </div>
    <div className="projects grid-container">
    {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      {/* <ProjectCard className="gr+
       */}
  


    </div>
    <div className="skills heading">
      {
        ratio>=1?
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfZFYUBE46hp7sCkkvgH-P17MMUrz0CktQ7zkXichM5PPedvA/viewform?embedded=true" 
        width="900" height="500" 
        frameborder="0"  marginheight="0" marginwidth="0">Loading…</iframe>    
        :
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfZFYUBE46hp7sCkkvgH-P17MMUrz0CktQ7zkXichM5PPedvA/viewform?embedded=true" 
        width="350" height="600" 
        frameborder="0"  marginheight="0" marginwidth="0">Loading…</iframe>    
      }
    </div>
    </div>
  )
}


export const ProjectCard = ({ project }) => {
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ratio]);
  return (
    <div className='pcard'>
      <div className="pcardimage">
        <img className="projectimg" src={project.path} 
               style={
                
                { 
                  height:ratio>=1?"300px":"200px",
                  width:ratio>=1?"300px":"200px",
                }
              }
         alt="" />
        <a href={project.link} className="githbtn" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <div className="pcardcontent">
        <div className="projectheading">{project.heading}</div>
        <div className="projectstack"  
                       style={
                        {
                          fontSize:ratio>=1?"":"16px",
                      }
                      }
        ><strong>{project.stack}</strong></div>
        <div className="projectcontent"
               style={
                {
                  fontSize:ratio>=1?"":"17px",
              }
              }
         dangerouslySetInnerHTML={{ __html: project.content }}></div>
      </div>
    </div>
  )
}
