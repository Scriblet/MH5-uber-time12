import React from 'react';
import back from '../img/back.svg';
import PhotoPerfil from '../img/photoPerfil.svg';
import startPoint from '../img/starPoint.svg';
// import listPlans from '../img/Group_30.png';

function packPlans () {
    return (
      <div className="body-pack">
				<div className="nav-pack">
					<img src={back} alt="back" className="icon-back"/>
					<p className="title-pack">Escolha sua viagem</p>
					<div className="info-perfil">
						<p className="name-user">Lucas Gabriel</p>
						<div>
							<img src={startPoint} alt="" />
							<p>4,95</p>
						</div>
						<img src={PhotoPerfil} alt="imagem perfil"/>
					</div>
				</div>
				<div className="plans">
				</div>
				{/* <img alt="ecra" src={listPlans} /> */}
			</div>  
    );
}

export default packPlans;
