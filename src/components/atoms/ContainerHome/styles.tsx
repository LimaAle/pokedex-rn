import styled from 'styled-components/native'

export const StyledContainerHome = styled.View`
  min-height:100px;
  background-color:${props=>props.background};
  border-bottom-left-radius: 50px;
`
export const BackgroundContainer= styled.View`
  flex: 1;
  background-color: ${props=>props.color};
`