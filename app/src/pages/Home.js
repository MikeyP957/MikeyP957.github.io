import React from 'react'
import Title from '../components/Title'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import profilePic from '../media/mikeyP.jpg'
import '../App.css'


function Home() {
return (
    <div>
        <Title title={"About Me"} />
        <Container>
            <Row>
                <Col xs={6} md={4}>
                <Image className="profPic" src={profilePic} thumbnail />
                </Col>
            </Row>
        </Container>

    </div>
)
}

export default Home