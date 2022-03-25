import React from 'react';
import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const profilepic = 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'

const js = "https://img.icons8.com/color/48/000000/javascript--v1.png"
const reactjs = "https://img.icons8.com/ultraviolet/40/000000/react--v1.png"
const python = "https://img.icons8.com/color/48/000000/python--v1.png"
const nodejs = "https://img.icons8.com/color/48/000000/nodejs.png"

export const About = () => {
  let navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }
  return (
    <div className='home-body' mt-5>
      <Container>
          <Row className='home-main-row'>
              <Col>
                <Card className='p-5'>
                    <Card.Body>
                        <Image src={ profilepic} height={300} roundedCircle />
                        <Card.Title>
                            <h1>J Nikorn</h1>
                        </Card.Title>
                 
                        <Card.Text>
                          <p>Lorem ipsum dolor te perspiciatis nemo quae quas accusantium sint!</p>
                          <p>Lorem ipsum dolor acere, quis voluptate. Nostrum, voluptates aliquid dolorem distinctio quibusdam reprehenderit ea ullam, at error voluptatum molestias consequatur officia delectus iste hic natus fugiat, quas repudiandae! Voluptatibus alias nulla provident expedita quis!</p>
                        
                          <h3>My Skills</h3>
                          <ul className='myskills'>
                              <li><Image src={js} /></li>
                              <li><Image src={reactjs} /></li>
                              <li><Image src={python} /></li>
                              <li><Image src={nodejs} /></li>
                          </ul>
                          <div className='back-next-button'>
                              <Button onClick={handleBack} variant="dark">Back</Button>
                          </div>

                        </Card.Text>

                 
                    </Card.Body>
                </Card>
              </Col>
          </Row>
      </Container>
    </div>
  );
}

