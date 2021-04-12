import './App.css'
import './LanguageStore/i18n'
import Title from './Components/Title'
import Advantages from './Components/Advantages'
import LanguageSelector from './Components/LanguageSelector'

const App = () => {
    return (
      <div className="app">
          <LanguageSelector />
          <Title />
          <Advantages />
      </div>
    )
}

export default App
