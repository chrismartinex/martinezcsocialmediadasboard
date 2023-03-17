import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Switch from "./Switch";

 function Header({ handleClick }) {

  const mainStyle = {
    backgroundColor: "#1F212E",
  };

 return (
   <Container>
     <Row>
       <Col>
         <div className='letterHead'>
           <p>Social Media Dashboard</p>
         </div>
         <p className="letterGray">Total Followers</p>
       </Col>
       <Col className='container'>
         <Switch
           handleClick={handleClick}
           className='row justify-content-end'
         />
       </Col>
     </Row>
   </Container>
 );
}
export default Header;