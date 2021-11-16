import React from 'react';
import axios from 'axios';
import { Form , Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import {APIHOST as host} from '../app.json'
import img1 from '../img/logo.png'
import { isNull} from 'util';
import Cookies from 'universal-cookie';
import { calculaExpiracionSesion } from '../helper/helper';
import Loading from '../loading/loading';

const cookies = new Cookies();

export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: false, 
            usuario: '', 
            pass: '', };
    }
    iniciarSesion(){
         this.setState({loading: true});
         axios.post(`${host}/usuarios/login`, {
            usuario: this.state.usuario , 
            pass: this.state.pass,
        })
        .then((response) => {
            if (isNull(response.data.token)){
                alert('usuario y/o clave errados');
            }else{
                cookies.set('_s', response.data.token, {
                    path: '/', 
                    expires: calculaExpiracionSesion(),
                });
                this.props.history.push('/home');
            }
            this.setState({loading: false});
        })
        .catch((err)=> {
            console.log(err);
            this.setState({loading: false});
        }); 
        
    }
    render(){
        return (
        
        <Container id="login-container" >
                <Loading show={this.state.loading} />
                <Row>
                    <Col>
                    <img src={img1} height="200px" width="300px" className="rounded mx-auto d-block" alt="..."/>
                    </Col>
                </Row>
                <Col sm="12" xs ="12" md= {{span:4 , offset:4}} lg= {{span:4 , offset:4}} xl= {{span:4 , offset:4}}>
              
            <Form>
                <Form.Group>
                    <Form.Label >Usuario</Form.Label>
                    <Form.Control type="name" placeholder="Usuario" 
                        onChange={(e) =>
                            this.setState({usuario:e.target.value})}/>
                            {/* {this.state.usuario} */}
                    <Form.Text className="text-muted">
                            No compartimos sus datos con terceros.
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label >Clave</Form.Label>
                    <Form.Control type="password" placeholder="Clave" 
                        onChange={(e) =>
                            this.setState({pass:e.target.value})}/>
                            {/* {this.state.pass} */}
                </Form.Group>
                <Button variant="primary" type="submit"  
                        onClick={() =>{   this.iniciarSesion();   }}>
                            Iniciar Sesión
                </Button>
            </Form> </Col>
        </Container>);
        
    }
}
