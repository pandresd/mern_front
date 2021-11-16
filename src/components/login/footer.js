import React from 'react';
import {   Container } from 'react-bootstrap';
import './footer.css'

export default class footer extends React.Component {

    render(){
        return (        
        <Container id="login-container" >
            <footer class="container-lg footer-section">
                <div class="row justify-content-space-evenly">

                    <article class="col-12 offset-md-1 col-md-5">
                        <h2>Contacto</h2>
            
                        <p>Información de contacto</p>
                        <p>Número de teléfono</p>
                        <p>Dirección de correo electrónico</p>
                    </article>
                    <article class="col-12 offset-md-1 col-md-5">
                        <h2>Información legal</h2>
            
                        <p>Conformidad con la ley de protección de datos</p>
                        <p>Derechos reservados del sitio</p>
                        <p>wwwmaster@fondetic.info</p>
                    </article>
                </div>
            </footer>
        </Container>
        );

}
}