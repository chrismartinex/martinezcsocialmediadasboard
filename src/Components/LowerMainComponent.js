import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Facebook from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";
import Instagram from "../images/icon-instagram.svg";
import Youtube from "../images/icon-youtube.svg";
import Up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";



export default function LowerMain() {
  return (
    <Container>
      <div>
        <p>OVERVIEW-TODAY</p>
      </div>
      <Row className='my-4'>
        <Col>
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>
                Page View <img src={Facebook} />
              </Card.Title>
              <Card.Title>
                87 <img src={Up} />
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>
                Likes <img src={Facebook} />
              </Card.Title>
              <Card.Title>
                52 <img src={down} />
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>
                Likes <img src={Instagram} />
              </Card.Title>
              <Card.Title>
                5462 <img src={Up} />
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>
                Profile Views <img src={Instagram} />
              </Card.Title>
              <Card.Title>
                52K <img src={Up} />
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>
                Retweets <img src={Twitter} />
              </Card.Title>
              <Card.Title>
                87 <img src={Up} />
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>
                Likes <img src={Twitter} />
              </Card.Title>
              <Card.Title>
                507 <img src={Up} />
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>
                Likes <img src={Youtube} />
              </Card.Title>
              <Card.Title>
                107 <img src={down} />
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "15rem" }}>
            <Card.Body>
              <Card.Title>
                Total Views <img src={Youtube} />
              </Card.Title>
              <Card.Title>
                1407 <img src={down} />
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}


