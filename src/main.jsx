// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './redux/store'
import './index.css'
import App from './App.jsx'
import { Loading } from './lib/HighFunction'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
)