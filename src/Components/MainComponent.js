import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Facebook from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";
import Instagram from "../images/icon-instagram.svg";
import Youtube from "../images/icon-youtube.svg";
import Up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";

export default function Main() {
  return (
    <Container>
      <Row className='my-5'>
        <Col>
          <Card style={{ width: "16rem" }}>
            <Card.Body>
              <Card.Title>
                <img src={Facebook} /> @nathanf
              </Card.Title>
              <Card.Text>
                <h1>1987</h1>
                <p>F O L L O W E R S</p>
                <p>
                  {" "}
                  <img src={Up} /> 12 Today
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "16rem" }}>
            <Card.Body>
              <Card.Title>
                <img src={Twitter} /> @nathanf
              </Card.Title>
              <Card.Text>
                <h1>1044</h1>
                <p>F O L L O W E R S</p>
                <p>
                  {" "}
                  <img src={Up} /> 90 Today
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "16rem" }}>
            <Card.Body>
              <Card.Title>
                <img src={Instagram} /> @nathanf
              </Card.Title>
              <Card.Text>
                <h1>1044</h1>
                <p>F O L L O W E R S</p>
                <p>
                  {" "}
                  <img src={Up} /> 90 Today
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "16rem" }}>
            <Card.Body>
              <Card.Title>
                <img src={Youtube} /> @nathanf
              </Card.Title>
              <Card.Text>
                <h1>1044</h1>
                <p>F O L L O W E R S</p>
                <p>
                  {" "}
                  <img src={down} /> 144 Today
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

