import React, { Component } from 'react'
import {Row,Col} from 'react-bootstrap'

export default class Footer extends Component {
  render () {
    return (
      
      <Row className={"footer"}>
      		<Col sm={6} xs={12} className="footer-col">
      			<h1 id="title">CODEUINO</h1>
      			<button id="modal-btn" type="button" class="btn btn-info">Abous Us</button>
            
      			<p>Codeuino-An Open Source Non-Profit Organisation, founded by Jaskirat Singh an Open Source maniac. Codeuino develops various Open Source Softwares that tends to benefit all the people around. The organisation acts as a guiding hand in the process and provides resources and infrastructure.</p>
      			<ul class="list-inline">

						<li class="list-inline-item"><a href="https://www.facebook.com/codeuino/"><i class="fa fa-facebook ico"></i></a></li>
						<li class="list-inline-item"><a href="https://www.twitter.com/codeuino/"><i class="fa fa-twitter ico"></i></a></li>
						<li class="list-inline-item"><a href="https://www.in.linkedin.com/codeuino/"><i class="fa fa-linkedin ico"></i></a></li>
						<li class="list-inline-item"><a href="https://www.github.com/codeuino/"><i class="fa fa-github ico"></i></a></li>
					</ul>
      		</Col>
      		<Col sm={6} xs={12} className="footer-col">
      			<h1>SUBSCRIBE</h1>
      				<input className="in" type="name" name="" placeholder="Your Name"/>
					<input className="in" type="name" name="" placeholder="Email"/>
					<a class="btn btn-info button"  href="#">Submit</a>
      		</Col>
  		</Row>
  		
    )
  }
}
