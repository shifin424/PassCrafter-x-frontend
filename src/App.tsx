 
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css'
import Router from './routes/Router'

function App() {
  
  
  
  
  return (
    <>
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Router/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
