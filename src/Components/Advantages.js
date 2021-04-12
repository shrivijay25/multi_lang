import React from 'react'
import { withTranslation } from 'react-i18next'

const Advantages = ({t}) => {
  return (
    <div>
      <h3>{t('Advantages')}</h3>

      <ul>
        <li>{t('advantages_1')}</li>
        <li>{t('advantages_3')}</li>
        <li>{t('advantages_3')}</li>
      </ul>
    </div>
  )
}

export default withTranslation()(Advantages)
