import '../src/index.css'
import { useState,useEffect } from 'react';

const App=()=>{
  const [width,setWidth]=useState(0);
  //UseState Hook For State Changing 

  useEffect(()=>{
    window.addEventListener('resize',()=>{
      setWidth(()=>
        window.innerWidth)
    })
  })

  return(
    <div>The Screen Width Is : {width} Px</div>
  )
};

export default App