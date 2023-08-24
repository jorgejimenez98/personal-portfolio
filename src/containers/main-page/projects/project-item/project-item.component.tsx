import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { Gallery, Modal } from '@/components'
import { Project } from '@/types'
import { classes } from './project-item.classes'

export const ProjectItem: React.FC<{ project: Project }> = ({ project }) => {
  const { t, i18n: { language } } = useTranslation()
  const [isModalVisible, setIsModalVisible] = useState(false)

  return <>
    <div className={classes.card}>
      <div className={classes.content}>

        <div className={classes.card_body}>

          <div className={classes.body_content}>

            {/* Name */}
            <h2 className={classes.title}>
              {project[`name_${language}` as keyof Project]}
            </h2>

            {/* Logo */}
            <figure className={classes.figure}>
              <Image
                src={project.logoUrl}
                className={classes.logo}
                width={50}
                height={30}
                alt='project-logo'
              />
            </figure>
          </div>

          {/* Description */}
          <p className={classes.opacity}>
            {project[`description_${language}` as keyof Project]}
          </p>

          {/* Actions */}
          <div className={classes.actions}>

            {/* Link */}
            <Link
              passHref
              href={project.websiteUrl}
              target='_blank'
            >
              <button className={classes.url_button}>
                {project.isRepoUrl ? t('Projects.SourceCode'): t('Projects.VisitWebsite')}
              </button>
            </Link>

            {/* Modal Buttom */}
            {project.images?.length > 0 && (
              <div className={classes.modal_btn}>
                <div
                  className={classes.tooltip}
                  data-tip={t('Projects.WatchImages')}
                >
                  <button
                    className={classes.eye_button}
                    onClick={() => setIsModalVisible(true)}
                  >
                    <i className={classes.eye_icon} />
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>

    <Modal
      isVisible={isModalVisible}
      handleClose={() => setIsModalVisible(false)}
    >
      <Gallery imageUrls={project.images}/>
    </Modal>
  </>
}
