import React from 'react'
import { sections } from './mainpage.sections'
import { MainPageProps } from '@/types'
import { FadeLayout } from '@/layouts'

const MainPageContent: React.FC<MainPageProps> = (props) => {

  return sections(props).map((section, idx) => {
    const Component = section.component
    const props = section.props

    return (
      <div className='flex flex-col mt-10' key={idx}>
        <FadeLayout>
          <Component {...props} />
        </FadeLayout>
      </div>
    )
  })
}

export default MainPageContent
