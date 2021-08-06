import React from 'react'
import {TabsHomeTitle} from './styles'

type props={
  text:String
}

function TitleCard({text}:props) {
  return (
    <TabsHomeTitle >{text}</TabsHomeTitle>
  )
}

export default TitleCard