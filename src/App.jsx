import { Provider } from 'react-redux'
import store from './components/Store/store.js'
import Home from './components/Home/home.jsx'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './components/Details/Details'
import './App.css'

function App() {

  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details' element={<Details />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </Provider>
  )
}

export default App
