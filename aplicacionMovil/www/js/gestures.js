/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app= {
    inicio: function(){
        var botonClaro = document.querySelector('#claro');
        var botonOscuro = document.querySelector('#oscuro');
        
        botonClaro.addEventListener('click', this.ponloClaro, false);
        botonOscuro.addEventListener('click', this.ponloOscuro, false);
    }   ,
    ponloClaro: function() {
        document.body.className= 'claro';
    },
    
    ponloOscuro: function() {
        document.body.className= 'oscuro';
    }
};
app.inicio();

