/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app= {
    inicio: function(){
        this.iniciaBotones();
        this.iniciaFastClick();
        this.iniciaHammer();
    },
    
    iniciaFastClick: function() {
        FastClick.attach(document.body);
    },
    
    iniciaBotones: function(){
        var botonClaro = document.querySelector('#claro');
        var botonOscuro = document.querySelector('#oscuro');
        
        botonClaro.addEventListener('click', this.ponloClaro, false);
        botonOscuro.addEventListener('click', this.ponloOscuro, false);
    },
    
    iniciaHammer: function(){
        var zona = document.getElementById('zona-gestos');
        var hammertime = new Hammer(zona);
        
        hammertime.get('pinch').set ({enable: true});
        hammertime.get('rotate').set ({enable: true});
        
        zona.addEventListener('webkitAnimationEnd', function(e){
            zona.className= '';                                 // Quita el nombre de la clase al final de la animacion
        });
/*        hammertime.on ('tap doubletap pan swipe press pinch rotate', function(ev){ */
        hammertime.on ('doubletap', function(ev){  
        document.querySelector('#info').innerHTML= ev.type + '!';
        zona.className = 'doubletap';
        });
        hammertime.on ('press', function(ev){
            zona.className='press';
        });
        
    },
    ponloClaro: function() {
        document.body.className= 'claro';
    },
    
    ponloOscuro: function() {
        document.body.className= 'oscuro';
    }
};
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function(){
        app.inicio();
    }, false)
}

