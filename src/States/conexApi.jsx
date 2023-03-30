import React from 'react'
import {useStates, useEffect} from 'react'



function ConexApi() {

    const [stado, setstado]= useStates([])

    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then((responsive) => { 
            return responsive.json()
        })

    })


  return (
    <div>
            
    </div>
  )
}

export default ConexApi