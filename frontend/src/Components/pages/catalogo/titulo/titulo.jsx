import React from 'react'
import Image from './maxi.jpg'

const Imgstyle = {

    height: '20%',
    width: '50%'
}


function titulo (props) {
  
        return( 

        <img style={Imgstyle} src={Image}/>
        
            )
    
}

export default titulo;