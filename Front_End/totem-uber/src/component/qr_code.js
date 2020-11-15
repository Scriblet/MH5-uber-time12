import React from 'react';
import webCam from './js/cam.js';

class QrCode extends React.Component {
  componentDidMount() {
    webCam();
  }
  render() {
    return(
      <div className="read-qr">
          <div>
            <h1 className="text-title-qr">Aproxime seu QR Code no leitor</h1>
          </div>
          <div>
            <video autoplay="true" id="webCam">
            </video>
          <button></button>
          </div>
        </div>
      );
    }
}

export default QrCode;
