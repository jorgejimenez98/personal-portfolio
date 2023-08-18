import React from 'react'
import { sections } from './mainpage.sections'
import { MainPageProps } from '@/types'

const MainPageContent: React.FC<MainPageProps> = (props) => {

  return sections(props).map((section, idx) => {
    const Component = section.component
    const props = section.props

    return (
      <div className='mt-10' key={idx}>
        <Component {...props} />
      </div>
    )
  })
}

export default MainPageContent
