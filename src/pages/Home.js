import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3Alt,
  faJs,
  faNodeJs,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";

import { styled } from "styled-components";

export default function Home() {
  return (
    <Container>
      <div className="fade-logo" style={{ color: "orange" }}>
        Creative{" "}
      </div>
      <div className="typer">
        <div className="glow">Frontend Developer...</div>
      </div>
      <Row className="justify-content-center align-items-center h-100">
        <Col>
          <Card>
            <div className="skills">
              <FontAwesomeIcon
                icon={faReact}
                style={{
                  color: "cyan",
                  fontSize: "3.5rem",
                  margin: "10",
                }}
              />
              <FontAwesomeIcon
                icon={faCss3Alt}
                style={{
                  color: "blue",
                  fontSize: "3.5rem",
                  margin: "10",
                }}
              />

              <FontAwesomeIcon
                icon={faJs}
                style={{
                  color: "yellow",
                  fontSize: "3.5rem",
                  margin: "10",
                }}
              />
              <FontAwesomeIcon
                icon={faNodeJs}
                style={{
                  color: "green",
                  fontSize: "3.5rem",
                  margin: "10",
                }}
              />
              <FontAwesomeIcon
                icon={faHtml5}
                style={{
                  color: "orange",
                  fontSize: "3.5rem",
                  margin: "10",
                }}
              />
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

const Card = styled.div`
  .skills {
    display: flex;
    position: relative;
    top: -50px;
    place-content: center;
    margin: 1rem;
    opacity: 50%;
  }
  }
`;
