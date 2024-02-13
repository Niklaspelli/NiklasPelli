import bild from "./img/Niklas.jpg";

const PDF_FILE_URL = "http://localhost:3000/Niklas_Pelli_CV.pdf";

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
      <h2>About</h2>
      <div className="card-container">
        <div className="card-bg">
          <p className="card-text">
            Jag heter Niklas Pelli och är 35 år gammal. Född och uppvuxen i en
            liten stad som heter Haparanda, ligger i norra delarna av landet.
            Bott i Stockholm sedan 2011 och har musik som stor passion.På
            fritiden spelar jag trummor i metalbandet Vometh. Men andra saker
            som jag gillar är:
          </p>
          <p>
            Vill du komma i kontakt med mig, gå in på fliken <b>"Kontakt"</b>
          </p>
        </div>

        <img src={bild} className="img" alt="" />
      </div>
      <button
        onClick={() => {
          downloadFileAtURL(PDF_FILE_URL);
        }}
        className="--btn --btn -primary"
      >
        Download CV
      </button>
    </main>
  );
}
