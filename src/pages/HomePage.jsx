import React, { useEffect, useState } from 'react'
import './HomePage.css'

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
        {fontSize:ratio>=1?"100px":"50px"}
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
      ,left: ratio>=1?"0":"-206px"
      ,top: ratio>=1?"45px":"0"
    }
    }
    frameborder="0" 
    className='iframeTrunk'
    ></iframe>

    </div>
    <div className="projects heading">Projects Discovered Along the Tech Odyssey</div>
    <div className="skills heading">Abilities Forged on this Journey</div>
    </div>
  )
}
