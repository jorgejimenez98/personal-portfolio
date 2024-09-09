import { global_classes } from '@/lib/constants'
import React from 'react'
import { useTranslation } from 'next-i18next'
import { skills } from './skills.options'

export const SkillsSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className='relative overflow-hidden'>
      <div className='relative z-10'>

        {/* Title */}
        <h2 className={global_classes.left_big_text}>
          {t('MainSkills.Title')}
        </h2>

        <p className='text-center lg:text-start mt-4'>
          {t('MainSkills.Phrase')}
        </p>

        {/* Categories List */}
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-2 py-5'>
          {skills(t).map((category, index) => (
            <div key={index} className='card shadow-md glass'>
              <div className='card-body'>
                <h2 className='card-title'>
                  {/* Icon */}
                  <i className={`fas ${category.icon}`}></i>
                  {/* Title */}
                  <span className='ml-2'>
                    {category.title}
                  </span>
                </h2>

                {/* Skills */}
                <div className='flex flex-wrap gap-2 mt-2'>
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className='badge badge-ghost'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
