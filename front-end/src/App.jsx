import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import UsersList from './components/UsersList'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  

  return (
    <>
    <Container fluid className='mt-4 mb-3'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UsersList />} />
          <Route path='/' element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </Container>
    </>
  )
}

export default App
