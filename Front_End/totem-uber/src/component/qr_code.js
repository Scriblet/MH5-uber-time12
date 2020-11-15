import React from 'react';
import { Link } from 'react-router-dom';
import webCam from './js/cam.js';
import qrCode from '../img/QR_Code_Icon.svg';

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
            { stream.active ? <video autoplay="true" id="webCam" /> : <img src={qrCode} autoplay="true" id="webCam" alt="qr Code" />}
            <div className="cancel-qr">
              <Link to="/" >
                <p className="btn-cancel-qr">Cancelar</p>
              </Link>
            </div>
          </div>
        </div>
      );
    }
}

export default QrCode;
