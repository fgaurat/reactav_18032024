import { useTranslation } from 'react-i18next'
import './App.css'

function App() {
  const {t,i18n}= useTranslation()
  
  
  return (
    <>
    <h1>{t('Welcome to React')}</h1>
    <h1>{t('Toto')}</h1>
    <button onClick={() => i18n.changeLanguage('en')}>en</button>
    <button onClick={() => i18n.changeLanguage('fr-FR')}>fr</button>
    </>
  )
}

export default App
