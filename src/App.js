import './index.css';
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Container>
     <Header/>
     <CardContainer/>
     
    </Container>
  );
}

export default App;
