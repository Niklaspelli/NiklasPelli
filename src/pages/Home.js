import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
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
      <Row className="justify-content-center align-items-center h-100">
        <Col>
          <div className="fade-logo" style={{ color: "orange" }}>
            Creative{" "}
          </div>
          <div className="typer">
            <div className="glow">Frontend Developer...</div>
          </div>

          <Card
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 15 }}
          >
            <div className="skills">
              <FontAwesomeIcon
                icon={faReact}
                style={{
                  color: "cyan",

                  margin: "10",
                }}
              />
              <FontAwesomeIcon
                icon={faCss3Alt}
                style={{
                  color: "blue",

                  margin: "10",
                }}
              />

              <FontAwesomeIcon
                icon={faJs}
                style={{
                  color: "yellow",

                  margin: "10",
                }}
              />
              <FontAwesomeIcon
                icon={faNodeJs}
                style={{
                  color: "green",

                  margin: "10",
                }}
              />
              <FontAwesomeIcon
                icon={faHtml5}
                style={{
                  color: "orange",

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

const Card = styled(motion.div)`
  .skills {
    display: flex;
    position: relative;
    top: 24rem;

    place-content: center;
  }
`;
