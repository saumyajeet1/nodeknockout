import React from 'react';
import {Carousel,Container,Row,Col,Card,Button,Jumbotron} from 'react-bootstrap';
import img1 from '../../images/carousel0.jpg';
import img2 from '../../images/carousel1.jpg';
import img3 from '../../images/carousel2.jpg';
import cv from '../../images/cv.jpeg';
import regi from '../../images/reward.jpeg';
import det from '../../images/details.jpeg';
import logo from '../../images/logo.png';
import {Link} from 'react-router-dom'

const main = () => {
    return (
        <div>
            <Container>
  
  <Row>
    <Col xs={12} md={8}>
   

<Jumbotron fluid className="intro">
  <Container >
    <h1 style={{color:"brown"}}>Welcome!!</h1>
    <p className="intro_p">
      This is a place where you can store your academic information like events,awards,marks,etc. To access more of its contents, please <span className="intro_preg">register</span> or login
    </p>
    <Button variant="danger"><Link to="/register">Register</Link></Button>
  </Container>
</Jumbotron>

    </Col>
    <Col xs={6} md={4}>
      <img className='logo' src={logo}/>
    </Col>
  </Row>

  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  </Container>
  <div className="works">
    <Container>
  <Row >
    <Col xs={6} md={4}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={det} />
  <Card.Body>
    <Card.Title>Details</Card.Title>
    <Card.Text>
      Save your own academic details in the website
    </Card.Text>
    <Button variant="primary" disabled>Go somewhere</Button>
  </Card.Body>
</Card>
    
    </Col>
    <Col xs={6} md={4}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={regi} />
  <Card.Body>
    <Card.Title>Rewards</Card.Title>
    <Card.Text>
      Save your achievements in the website
    </Card.Text>
    <Button variant="primary" disabled>Go somewhere</Button>
  </Card.Body>
</Card>
    </Col>
    <Col xs={6} md={4}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={cv}/>
  <Card.Body>
    <Card.Title>CV</Card.Title>
    <Card.Text>
      Get your achievements summed up as a cv
    </Card.Text>
    <Button variant="primary" disabled>Go somewhere</Button>
  </Card.Body>
</Card>
    </Col>
  </Row>
  </Container>

  {/* Columns are always 50% wide, on mobile and desktop */}
  </div>

  
        </div>
    );
};

export default main;