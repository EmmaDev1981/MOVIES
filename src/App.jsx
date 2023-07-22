import { Provider } from 'react-redux'
import store from './components/Store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import Home from './components/Home/home.jsx'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './components/Details/Details'
import Favorites from './components/Favoritos/Favorites'


function App() {
  
  let persistor = persistStore(store)
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SnackbarProvider maxSnack={3}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/details' element={<Details />} />
              <Route path='/favorites' element={<Favorites />} />
            </Routes>
          </BrowserRouter>
        </SnackbarProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
