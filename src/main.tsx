import ReactDOM from 'react-dom/client'
import { AppContextProvider } from './store/app-context/app-context.tsx'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
)
