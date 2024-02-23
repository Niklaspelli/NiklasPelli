import bild from "./img/Niklas.jpg";

const PDF_FILE_URL = "./Niklas_Pelli_CV.pdf";

export default function About() {
  const downloadFileAtURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));

        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };
  return (
    <main className="About">
      <div className="card-container">
        <div className="card-bg">
          <p className="card-content">
            <h2>About</h2>I am <b>Niklas Pelli</b>, a creative individual
            hailing from Northern Sweden, a region known for its stunning
            landscapes and rich cultural heritage. My creativity finds
            expression in various forms, whether it's through design, music, or
            other outlets. Currently, I'm immersed in the world of web
            development, a field that allows me to blend my technical skills
            with my imaginative flair. I have a keen interest in technology and
            its potential for creative expression. I enjoy the process of
            building visually appealing and user-friendly websites, where I can
            combine my artistic sensibilities with my technical prowess to craft
            engaging digital experiences. As a <b>team player</b>, I thrive in
            collaborative environments, valuing the diverse perspectives and
            skills that each team member brings to the table.
          </p>
          <p>
            Get in touch with me by clicking on<b>"Contact"</b>
          </p>
          <button
            onClick={() => {
              downloadFileAtURL(PDF_FILE_URL);
            }}
            className="--btn --btn-contact"
          >
            Download CV
          </button>
        </div>
        <div className="card-img">
          <img src={bild} className="img" alt="" />
        </div>
      </div>
    </main>
  );
}
