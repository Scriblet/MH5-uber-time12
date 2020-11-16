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
            <video autoPlay={true} id="webCam">
            </video>
            <div className="cancel-qr">
              <button className="btn-cancel-qr">Cancelar</button>
            </div>
          </div>
        </div>
      );
    }
}

export default QrCode;
