import HomePage from './components/HomePage';
import { AppProvider } from './context/appContext';
function App() {
    return (
      <AppProvider>
        <HomePage/>  
      </AppProvider>  
    )
}

export default App



















// import './App.css'