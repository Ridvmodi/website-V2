import React, { Component } from 'react'
import {Carousel,Grid,Row,Col} from 'react-bootstrap'
export default class Header extends Component {
  render () {
    return (
<Carousel className={"carousel-fade"} controls = {false} interval={1000}>
  <Carousel.Item>
    <img className={"background-image"}  alt="900x500" src="images/img3.jpg" />
        <Grid>
         <Row className="show-grid">
        <Col xs={6} xsOffset={6}>
        <h1>CODUINO</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    </Col>
  </Row>
        </Grid>
  </Carousel.Item>
  <Carousel.Item>
    <img className={"background-image"} alt="900x500" src="images/img4.jpg" / >
        <Grid>
          <Row className="show-grid">
        <Col xs={6} xsOffset={6}>
        <h1>CODUINO</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    </Col>
  </Row>
        </Grid>
  </Carousel.Item>
  <Carousel.Item>
    <img className={"background-image"} alt="900x500" src="images/img5.jpg" />
             <Grid>
          <Row className="show-grid">
        <Col xs={6} xsOffset={6}>
        <h1>CODUINO</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    </Col>
  </Row>
        </Grid>
  </Carousel.Item>
</Carousel>
    )
  }
}


