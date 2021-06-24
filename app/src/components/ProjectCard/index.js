import React from "react";
import Card from 'react-bootstrap/Card'
import "./style.css";

function ProjectCard(props) {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}
        <br/>
        <a href={props.url} >Click here to view the project</a>        
        </Card.Title>
        <Card.Text>

          {props.description}
        </Card.Text>

      </Card.Body>
  </Card>
    
  );
}

export default ProjectCard;
