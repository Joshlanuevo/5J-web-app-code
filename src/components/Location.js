import React from 'react'
import styled from 'styled-components'

const Location = () => {
  return (
    <Map>
        <iframe 
            width="100%" 
            height="600px" 
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=Boni%20Ave,%20Mandaluyong,%20Metro%20Manila&t=k&z=15&ie=UTF8&iwloc=&output=embed" 
            frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
        </iframe>
    </Map>
  )
}

export default Location

const Map = styled.div`
`