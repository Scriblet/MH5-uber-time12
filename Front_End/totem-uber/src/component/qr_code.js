import React from "react";
import webCam from "./js/cam.js";
import "./css/qr.css";

class QrCode extends React.Component {
  componentDidMount() {
    webCam();
  }
  render() {
    return (
      <div className="read-qr">
        <div>
          <header className="header-qr">
            <h1 className="text-title-qr">Aproxime seu QR Code no leitor</h1>
          </header>
        </div>
        <div>
          <video autoplay="true" id="webCam"></video>
          <div className="cancel-qr">
            <button className="btn-cancel-qr">Cancelar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QrCode;
