import React from 'react'
import { HashLoader, PulseLoader } from 'react-spinners'
import { Wrapper } from './style'

const Loader = () => {
  return (
    <div>
       
       <Wrapper>
       <PulseLoader size={13} color="#40189d" speedMultiplier={0.7}  margin={7}/>
       </Wrapper>

    </div>
  )
}

export default Loader