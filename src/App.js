import { Container } from 'react-bootstrap';
import './App.css';
import Menu from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Login from './components/login/login';
/* import Carrusel from './components/login/carrusel'; */
import AppRouter from './components/router/router';
import Footer from './components/login/footer'

function App() {
  return (
    <div className="App">
      <Container>
          <Menu />
          
          <AppRouter/> 
          <Footer/>
      </Container>
    </div>
  );
}

export default App;
