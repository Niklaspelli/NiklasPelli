import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <a
        href="https://se.linkedin.com/in/niklas-pelli-b09779284"
        target="_blank"
      >
        <FaLinkedinIn className="fa-brands" />
      </a>
      <a href="https://github.com/Niklaspelli" target="_blank">
        <FaGithub className="fa-brands" />
      </a>
    </footer>
  );
};

export default Footer;
