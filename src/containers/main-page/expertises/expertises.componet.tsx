import { Expertise } from '@/types'
import React from 'react'

export const ExpertiseContent: React.FC<{ expertises: Expertise[] }> = ({ expertises }) => {

  return (
    <div>ExpertiseContent {expertises.length}</div>
  )
}

