import React from 'react';
import { Carousel ,  Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import img2 from '../img/Banner2.gif'
import img3 from '../img/ofivirtual.png'
import img4 from '../img/5.jpg'

export default class carrusel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { usuario: '', pass: '', };
    }
    iniciarSesion(){
        alert(`usuario: ${this.state.usuario} , pass: ${this.state.pass}`)
    }
    render(){
        return (
        
        <Container id="login-container" >
                <Carousel >
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img2} height="400px" width="300px"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        {/* <h3>Recreación</h3>
                        <p>Convenios con clubes deportivos y centros de formación deportiva.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img3} height="400px" width="300px"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        {/* <h3>Salud</h3>
                        <p>Beneficios en planes de medicina complementaria.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img4} height="400px" width="300px"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Educación</h3>
                        <p>Descuentos en centros de educación formal y no formal.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        </Container>);
        
    }
}
