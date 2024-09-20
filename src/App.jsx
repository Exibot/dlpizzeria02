import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

function App() {
    return (
        <Container fluid>
            <NavigationBar />
            {/* <Home /> */}
            {/* <Register /> */}
            <Login />
            <Footer />
        </Container>
    );
}
export default App;
