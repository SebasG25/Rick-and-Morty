import './App.css';
import Characters from './components/Characters';
import Header from './components/Header';
import useTheme from './context/useTheme'

function App() {
  const { darkMode, toggleTheme, onSearchChangeHandler,search } = useTheme()

  return (
    <div className={`${darkMode ? 'dark' : 'light'} container-fluid p-4`}>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} onSearchChangeHandler={onSearchChangeHandler} search = {search}/>
      <Characters darkMode={darkMode} search = {search}/>
    </div>
  );
}

export default App;
