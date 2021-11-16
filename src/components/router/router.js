import React from 'react'
import { BrowserRouter as Router, 
    Route, 
    Switch/* , Link */
} from 'react-router-dom'
//import { Card/* , Button */, CardGroup  } from 'react-bootstrap';

/* import img1 from '../img/aho.jpg'
import img2 from '../img/cre.jpg'
import img3 from '../img/aux.jpg'
import img4 from '../img/ins.jpg'
import img5 from '../img/int.jpg'
import img6 from '../img/edu.jpg' */

import Home from '../login/Home'
import Login from '../login/login'
import PrivateRoute from '../auth/privateroute';

export default function AppRouter(){
    return(
        <Router>
            <Switch>
                
                <PrivateRoute exact path="/home" component={Home}/>
                <Route exact path="/login" component={Login}/>
                {/* <Route path={'*'} component={() => (
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img1} />
                    <Card.Text>
                        Oops! La página que buscas no se encuentra!!
                </Card.Text>
                    </Card>
                )}/> */}
            </Switch>
        </Router>
    )
}

/* function Home() {
    return <h2>HOME</h2>;
} */

// /* function Home() {
//     return [
//         <div><CardGroup>
//             <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={img1} />
//             <Card.Body>
//                 <Card.Title>Ahorros</Card.Title>
//                 <Card.Text>
//                 Some quick example text to build on the card title and make up the bulk of
//                 the card's content.
//                 </Card.Text>
//                 {/* <Button variant="primary">Go somewhere</Button> */}
//             </Card.Body>
//             </Card>
            
//             <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={img2} />
//             <Card.Body>
//                 <Card.Title>Créditos</Card.Title>
//                 <Card.Text>
//                 Some quicmensajen the card title and make up the bulk of
//                 the card's content.
//                 </Card.Text>
//                 {/* <Button variant="primary">Go somewhere</Button> */}
//             </Card.Body>
//             </Card>
//             <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={img3} />
//             <Card.Body>
//                 <Card.Title>Auxilios</Card.Title>
//                 <Card.Text>
//                 Some quicmensajen the card title and make up the bulk of
//                 the card's content.
//                 </Card.Text>
//                 {/* <Button variant="primary">Go somewhere</Button> */}
//             </Card.Body>
//             </Card>
//             </CardGroup>
//             <CardGroup>
//             <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={img4} />
//             <Card.Body>
//                 <Card.Title>Pólizas</Card.Title>
//                 <Card.Text>
//                 Some quick example text to build on the card title and make up the bulk of
//                 the card's content.
//                 </Card.Text>
//                 {/* <Button variant="primary">Go somewhere</Button> */}
//             </Card.Body>
//             </Card>
            
//             <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={img5} />
//             <Card.Body>
//                 <Card.Title>Tasas</Card.Title>
//                 <Card.Text>
//                 Some quicmensajen the card title and make up the bulk of
//                 the card's content.
//                 </Card.Text>
//                 {/* <Button variant="primary">Go somewhere</Button> */}
//             </Card.Body>
//             </Card>
//             <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={img6} />
//             <Card.Body>
//                 <Card.Title>Educación</Card.Title>
//                 <Card.Text>
//                 Some quicmensajen the card title and make up the bulk of
//                 the card's content.
//                 </Card.Text>
//                 {/* <Button variant="primary">Go somewhere</Button> */}
//             </Card.Body>
//             </Card>
//             </CardGroup>
//         </div>
//     ]

// } */