import "./darkMode.css";
import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

export default function Lights() {
  const [theme, setTheme] = useState(false);

  const handleClick = () => {
    setTheme(true);
  };

  useEffect(() => {
    if (theme === true) {
      document.body.classList.add("Dark");
    } else {
      document.body.classList.remove("Dark");
    }
  });

  return (
    <div>
      <Row>
        <Col>
          
        </Col>
      </Row>
    </div>
  );
}
