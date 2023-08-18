import React from 'react'
import { MainSkill } from '@/types'

export const MainSkillsContent: React.FC<{ mainSkills: MainSkill[] }> = ({ mainSkills }) => {
  return (
    <div>MainSkillsContent{mainSkills.length}</div>
  )
}

