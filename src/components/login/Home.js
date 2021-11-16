import React/* , { Component }  */from 'react'
import Carrusel from './carrusel';
import { Card/* , Button */, CardGroup  } from 'react-bootstrap';
import img1 from '../img/aho.jpg'
import img2 from '../img/cre.jpg'
import img3 from '../img/aux.jpg'
export default class home extends React.Component {
    render() {
        return (
            <div>
                <Carrusel/> 
            
            <CardGroup>
                         <Card style={{ width: '18rem' }}>
                         <Card.Img variant="top" src={img1} />
                         <Card.Body>
                             <Card.Title>Ahorros</Card.Title>
                             <Card.Text>
                             Some quick example text to build on the card title and make up the bulk of
                             the card's content.
                             </Card.Text>
                             {/* <Button variant="primary">Go somewhere</Button> */}
                         </Card.Body>
                         </Card>
                        
                         <Card style={{ width: '18rem' }}>
                         <Card.Img variant="top" src={img2} />
                         <Card.Body>
                             <Card.Title>Créditos</Card.Title>
                             <Card.Text>
                             Some quicmensajen the card title and make up the bulk of
                             the card's content.
                             </Card.Text>
                             {/* <Button variant="primary">Go somewhere</Button> */}
                         </Card.Body>
                         </Card>
                         <Card style={{ width: '18rem' }}>
                         <Card.Img variant="top" src={img3} />
                         <Card.Body>
                             <Card.Title>Auxilios</Card.Title>
                             <Card.Text>
                             Some quicmensajen the card title and make up the bulk of
                             the card's content.
                             </Card.Text>
                             {/* <Button variant="primary">Go somewhere</Button> */}
                         </Card.Body>
                         </Card>
                         </CardGroup>
                         </div>
        )
    }
}