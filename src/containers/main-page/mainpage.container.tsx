import React from 'react'
import { sections } from './mainpage.sections'

const MainPageContent: React.FC = () => {
  return sections.map(section => React.createElement(section.component))
}

export default MainPageContent
