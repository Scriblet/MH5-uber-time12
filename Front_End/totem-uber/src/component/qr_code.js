import React from 'react';
import { Link } from 'react-router-dom';
import { webCam, videoPromise } from './js/cam.js';
import qrCode from '../img/QR_Code_Icon.svg';

class QrCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isfecth: false,
    }
    this.handleChangeIsFecth = this.handleChangeIsFecth.bind(this);
  }
  handleChangeIsFecth() {
    this.setState({
      isfecth: true,
    })
  }
  componentDidMount() {
    webCam(this.handleChangeIsFecth);
  }
  // componentDidUpdate() {
  //   webCam();
  // }
  render() {
    return(
      <div className="read-qr">
          <div>
            <h1 className="text-title-qr">Aproxime seu QR Code no leitor</h1>
          </div>
          <div>
            { this.state.isfecth ? <video id="webCam" autoPlay="true" /> : <img src={qrCode} autoPlay="false" id="webCam" alt="qr Code" /> }
            { console.log(videoPromise.active) }
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
