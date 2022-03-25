import React from 'react';
import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap'
const profilepic = 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'

export const Home = () => {
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
                        <Card.Subtitle className='mb-2 text-muted'>
                            <h2>full-Stack Developer</h2>
                        </Card.Subtitle>
                        <Card.Text>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates similique vero perspiciatis veritatis nihil odio? Nobis enim, unde perspiciatis tenetur pariatur dolor corrupti qui consectetur placeat. Cum praesentium assumenda expedita totam quasi nostrum dolore doloremque, perspiciatis iste, sint ratione aspernatur ipsum labore sit veritatis id magni amet aperiam nisi corrupti.</p>
                        </Card.Text>
                        <Card.Link href="/about">
                            <Button variant='primary'>About</Button>
                        </Card.Link>
                    </Card.Body>
                </Card>
              </Col>
          </Row>
      </Container>
    </div>
  );
}

