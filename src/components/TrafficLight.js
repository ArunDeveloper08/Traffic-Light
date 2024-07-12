import React, { useEffect, useState } from 'react'

const TrafficLight = () => {
  const Light ={
    green :"green",
    yellow :"yellow",
    red :"red"
  }

    const [ active ,setActive] = useState(Light.green);

    useEffect(()=>{
        switch (active){
            case Light.green: 
                setTimeout(()=>setActive(Light.yellow),6000)
                break;
                case  Light.yellow :
                    setTimeout(()=>setActive(Light.red),2000)
                    break;
                    case  Light.red :
                        setTimeout(()=>setActive(Light.green),3000)
                    break;
                }
    },[active])
     
  return (
    <div>
 <h1 >Traffic Light</h1>
    <div className='wrapper'>
<div className='go'  style={active!=="green" ? {opacity:0.5} : null}></div>
<div className='slow' style={active!=="yellow" ? {opacity:0.5} : null}></div>
<div className='stop' style={active!=="red" ? {opacity:0.5} : null}></div>

    </div>
    </div>
  )
}

export default TrafficLight