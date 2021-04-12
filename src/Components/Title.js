import React from 'react'
import { useTranslation } from 'react-i18next'

const Title = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h2>{t('intro')}</h2>
      <p> {t('details')} </p>
    </div>
  )
}

export default Title