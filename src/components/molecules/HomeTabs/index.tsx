import React from 'react'
import ContainerHome from "../../atoms/ContainerHome"
import TitleCard from "../../atoms/TitleCard"

type props={
  background:String
  color:String
  text:String
}

function HomeTabs({ background, color, text }:props) {
  return (
    <ContainerHome background={background} color={color} >
      <TitleCard text={text} />
    </ContainerHome>
  )
}

export default HomeTabs