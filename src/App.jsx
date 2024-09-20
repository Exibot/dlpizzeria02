import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <Container fluid>
            <NavigationBar />
            <Home />
            <Footer />
        </Container>
    );
}

export default App;
