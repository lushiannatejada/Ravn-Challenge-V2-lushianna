import React, { useState } from 'react';
import { Card, CardText, CardBody, Col } from 'reactstrap';

const Personajes = (props) => {
const [readMore, setReadMore]= useState(false);
const {gender, height, name, mass, birthYear, created, 
        eyeColor, hairColor, skinColor, filmConnection} = props.people;
let peliculas = [];
const {titulofilm} = filmConnection.films;
if(titulofilm != undefined){
    peliculas = titulofilm;
}
console.log(filmConnection);
const extraContent = <CardText> 
                    <small class="text-muted">Color de Ojos</small>                 
                    <h6 >{eyeColor}</h6>
                    <small class="text-muted">Color de Cabello</small>                 
                    <h6 >{hairColor}</h6>
                    <small class="text-muted">Color de Piel</small>                 
                    <h6 >{skinColor}</h6>
                    {filmConnection.films.map(function(item){
                        return (<div><small class="text-muted">Pelicula</small>                 
                        <h6 >{item.title}</h6></div>)
                    })}
                </CardText>
const linkName=readMore?'Read Less':'Read More'

return (
        <Col sm="6">
        <Card style={{backgroundColor: "#050508", color: "#a1a2a2"}}>
            <CardBody>
            <center className="m-t-30"> <img src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png" class="img-circle" width="150"/>
                <h4 class="card-title m-t-10">{name}</h4>
            </center>                       
                <CardText>
                    <small class="text-muted">Genero</small>
                    <h6>{gender}</h6>
                    <small class="text-muted p-t-30 db">Estatura</small>
                    <h6>Estatura: {height}</h6>
                    <small class="text-muted p-t-30 db">Peso</small>
                    <h6>{mass}</h6>
                    <small class="text-muted p-t-30 db">Año de Nacimiento</small>
                    <h6>{birthYear}</h6>
                    <small class="text-muted p-t-30 db">Fecha de Creacion</small>
                    <h6>{created}</h6>
                </CardText>
                {readMore && extraContent}
            </CardBody>        
            <CardBody>
                <a style={{margin:5}} className = "btn btn-primary bt-block" onClick={()=>{setReadMore(!readMore)}}>
                    {linkName}
                </a>
               </CardBody>  
        </Card>
        <p></p>
        </Col>
);}

export default Personajes;