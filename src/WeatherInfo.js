import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import "./WeatherInfo.css";


export default function WeatherInfo(props) {
return (
    <Row>
     <Col className="col-md-6 cb1 d-flex justify-content-center">
     {[
        'Dark',
      ].map((variant) => (
        <Card
          className=" m-4 text-center opacity-75"
        >
        
          <Card.Body>
            <Card.Title> 
        
              <h1>{props.data.city}</h1></Card.Title>
            <Card.Text>
            <ul>
               <li>
                  <FormattedDate date={props.data.date} />
               </li>
            </ul>
            
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Col>
    <Col className="md-6 d-flex cb2 jastify-content text-center">
  
      <Card.Body>
        <Card.Title>
          <br />
          <WeatherTemperature celsius={props.data.temperature} />
          <WeatherIcon code={props.data.icon} size={92} /> 
          
            
        </Card.Title>
        <Card.Text>
        <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>

        </Card.Text>
      
      </Card.Body>
     
   
    </Col>
    </Row>
  );
}

 