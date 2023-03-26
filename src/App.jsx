import { CotizadorProvider } from './context/CotizadorProvider'
import AppSeguro from './components/AppSeguro'

import './App.css'

function App() {
  return (
    <CotizadorProvider>
      <AppSeguro />
    </CotizadorProvider>
  )
}

export default App
