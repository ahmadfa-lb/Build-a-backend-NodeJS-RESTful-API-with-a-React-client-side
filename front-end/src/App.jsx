import UsersList from './components/UsersList'
import { Container } from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  

  return (
    <>
    <Container fluid className='mt-4 mb-3'>
      <UsersList />
    </Container>
    </>
  )
}

export default App
