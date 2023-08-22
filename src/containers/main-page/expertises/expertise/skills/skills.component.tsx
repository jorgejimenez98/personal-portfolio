import { Badge } from '@/components'
import React from 'react'

interface SkillItemsProps {
  label: string
  items: string[]
  isKey?: boolean
}

export const SkillItems: React.FC<SkillItemsProps> = ({ label, items, isKey = false }) => {

  return (items?.length > 0) && (
    <div>
      {isKey && <div className='divider' />}

      <p className='text-sm opacity-60 mt-4'>
        {label}
      </p>

      {items.map((item, idx) => (
        <Badge
          type='GHOST'
          text={item}
          key={idx}
          className='mr-3 mt-2'
        />
      ))}
    </div>
  )
}
