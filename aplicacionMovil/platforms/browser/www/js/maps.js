var app={
    inicio: function(){
      this.iniciaFastClick();
    },
    iniciaFastClick: function () {
      FastClick.attach(document.body);      
  },
  dispositivoListo: function(){
      navigator.geolocation.getCurrentPosition(app.dibujaCoordenadas, app.errorAlSolicitarLocalizacion, opciones)
  },
  dibujaCoordendas: function(position){
      var coordsDiv = document.querySelector('#coords');
      coordsDiv.innerHTML='Latitud' + position.coords.latitude + ' Longitud: '+ position.coords.longitud;  
  },
  
  errorAlSolicitarLocalizacion: function(error){
      console.log(error.code + ': '+ error.message);
  }
};

var imageData;
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        app.inicio();
    }, false);
    document.addEventListener('devideready', function(){
        app.dispositivoListo();
    }, false);
}

