let videoPromise = {};
function webCam(funcHandle){
	//Captura elemento de vídeo
	const video = document.querySelector("#webCam");
		//As opções abaixo são necessárias para o funcionamento correto no iOS
		video.setAttribute('autoplay', '');
	    video.setAttribute('muted', '');
	    video.setAttribute('playsinline', '');
	    //--
	
	//Verifica se o navegador pode capturar mídia
	if (navigator.mediaDevices.getUserMedia) {
		navigator.mediaDevices.getUserMedia({audio: false, video: {facingMode: 'user'}})
		.then( function(stream) {
			//Definir o elemento vídeo a carregar o capturado pela webcam
			video.srcObject = stream;
			videoPromise = stream;
			funcHandle();
			// process.exit();
		})
		.catch(function(error) {
			console.log(error);
		});
	}
}

export { webCam, videoPromise };
