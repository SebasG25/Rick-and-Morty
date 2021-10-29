import './App.css';
import Characters from './components/Characters';
import Header from './components/Header';
import useTheme from './context/useTheme'

function App() {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <div className={`${darkMode ? 'dark' : 'light'} container-fluid p-4`}>
      <Header darkMode={darkMode} toggleTheme={toggleTheme}/>
      <Characters darkMode={darkMode}/>
    </div>
  );
}

export default App;
