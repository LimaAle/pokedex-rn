import React from 'react'
import { StyledContainerHome, BackgroundContainer } from './styles'

function ContainerHome({ children, background, color }) {
  return (
    <BackgroundContainer color={color}>
      <StyledContainerHome background={background} >
       
      </StyledContainerHome>
    </BackgroundContainer>
  )
}

export default ContainerHome