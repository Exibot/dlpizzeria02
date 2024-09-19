import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container fluid>
      <NavigationBar />
      <Home />
    </Container>
  )
}

export default App