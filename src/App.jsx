import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './autenticacion/Login'

function App() {
  return (
    
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    
  )
}

export default App