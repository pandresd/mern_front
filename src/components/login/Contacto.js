import React, { Component } from 'react'
import { Form , Button, Container/* , Row, Col */ } from 'react-bootstrap';

export default class contacto extends Component {
    render() {
        return (
            <Container id="formu-container" >
                
                
                {/* <Col sm="12" xs ="12" md= {{span:4 , offset:4}} lg= {{span:4 , offset:4}} xl= {{span:4 , offset:4}}> */}
              
            <Form>
                <Form.Group>
                    <Form.Label >Usuario</Form.Label>
                    <Form.Control type="name" placeholder="Usuario" />            
                    <Form.Text className="text-muted">
                            No compatimos sus datos con otros.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label >Email</Form.Label>
                    <Form.Control type="email" placeholder="email" />                            
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comentarios</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit"  
                        onClick={() =>{      }}>
                            Enviar formulario
                </Button>
            </Form> {/* </Col> */}
        </Container>);
        
    }
}
