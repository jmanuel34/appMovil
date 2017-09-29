/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app= {
    inicio: function(){
        this.iniciaFastClick();
    },
    iniciaFastClick: function() {
      FastClick.attach(document.body);      
  },
  iniciaBoton: function(){
   var ButtonAction=document.querySelector('#button-action');
   buttonAction.addEventListener('click', this.tomarFoto);
  },
  tomarFoto: function(){
      var opciones = {quality: 50,
              destinationType: Camera.DestinationType.FILE_URI,
              targetWidth: 300,
              targetHeight: 300,
              correctOrientation: true
          };
          navigator.camera.getPicture(app.fotoTomada, app.errorAlTomarFoto, opciones);
  },
  fotoTomada: function(imageURI) {
      var image = document.querySelector('#foto');
      image.src=imageURI;
  },
  errorAlTomarFoto: function(){
      console.log('Fallo al tomar la foto o toma cancelada: '+ message);
  }
};
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function(){
        app.inicio();
    }, false);
}

