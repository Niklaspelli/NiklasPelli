import { Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3Alt,
  faJs,
  faNodeJs,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <Container>
      <div className="fade-logo" style={{ color: "orange" }}>
        Creative{" "}
      </div>
      <div className="typer">
        <div className="glow">Frontend Developer...</div>
      </div>
      <Col>
        <FontAwesomeIcon
          icon={faReact}
          style={{
            color: "orange",
            fontSize: "5rem",
            margin: "10px",
            marginBottom: "20px",
          }}
        />
        <FontAwesomeIcon
          icon={faCss3Alt}
          style={{
            color: "orange",
            fontSize: "5rem",
            margin: "10px",
            marginBottom: "20px",
          }}
        />
        <FontAwesomeIcon
          icon={faJs}
          style={{
            color: "orange",
            fontSize: "4rem",
            margin: "10px",
            marginBottom: "20px",
          }}
        />
        <FontAwesomeIcon
          icon={faNodeJs}
          style={{
            color: "orange",
            fontSize: "4rem",
            margin: "10px",
            marginBottom: "20px",
          }}
        />
        <FontAwesomeIcon
          icon={faHtml5}
          style={{
            color: "orange",
            fontSize: "4rem",
            margin: "10px",
            marginBottom: "20px",
          }}
        />
      </Col>
    </Container>
  );
}
