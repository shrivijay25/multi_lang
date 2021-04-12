import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <>
      <label for="languages">Choose a language:</label>
      <select name="cars" id="cars" onChange={changeLanguage}>
        <option value="en">English</option>
        <option value="zh">Chinese</option>
        <option value="du">Dutch</option>
      </select>
    </>
  )
}

export default LanguageSelector