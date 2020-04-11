//$(function(){alert();}) //se comprueba que funciona jquery esto hace que aparezca una notificacion en la pagina
//Variables
let nav = document.getElementById('nav'); //creamos una variable nav la cual obtendra los elementos con id nav de html en este caso son el conjunto de links del encabezado
let menu = document.getElementById('enlaces'); //lo mismo que arriba, pero con enlaces osea los tipo 'a'
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');  /*ids del encabezado*/
let preload = document.getElementById('onload');
let body = document.getElementById('body');
let cerrado = true;

function menus(){
    let desplazamiento_Actual = window.pageYOffset;

    if(desplazamiento_Actual <= 300){   //con window.pageYOffset miramos cuando llega mas o menos a 300 y caambiamos la clase del menu de navegacion
        nav.classList.remove('nav2');   //removemos una clase de los links
        nav.className = ('nav1');       //agregamos la otra clase
        nav.style.transition='1s';      //hacemos que se demore 1 segundo en hacer la transicion
        menu.style.top = '80px';        //cambiamos el alto del menu de navegacion debido a que nav1 y nav2 tienen diferente tamaño
        abrir.style.color = '#fff'     //cambiamos el color del icono de navegacion
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition='1s';
        menu.style.top = '100px';
        abrir.style.color = '#000'
    }
}

function apertura(){
    if(cerrado){
        menu.style.width = '70vw'; //vw se ajusta al tamaño de la pantalla del momento en la parte horizontal 
        cerrado = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

window.addEventListener('load',function(){  //cuando recargo la pagina se actualiza tambien el header por si esta mas abajo
    $('#onload').fadeOut();           //escondemoes el preloader con jquery
    $('body').removeClass('hidden');  //removemos la clase hidden para poder hacer scroll
    //preload.style.display = 'none';  lo mismo de arriba pero hecho con js mas o menos
    //body.classList.remove('hidden');
    menus();
});

window.addEventListener('click',function(e){  //definimos 'e' de evento
    //console.log(e.target);  //con esto podemos ver a que les estoy dando click en la consola de la pagina
    if(cerrado==false){
        let span = document.querySelector('span'); //toma el primer elemento de tipo span en este caso es el icono para abrir el menu
        if(e.target !== span && e.target !== abrir){  //miramos que no toque el icono del menu con span y su funcion abrir y danco clic en cualquier lado si esta abierto lo cerramos
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});

window.addEventListener('scroll',function(){   //agregamo una funcion que ocurra cuando hacemos scroll en este caso que imprima
    console.log(window.pageYOffset);           //window.pageYOffset nos da los pixeles que la pantalla se ha desplazado desde arriba hasta abajo
    menus();
});

window.addEventListener('resize',function(){ //esta funcion lo que hace es cerrar el menu de navegacion y quitar las propiedades del responsive para que si aumentamos de tantos pixeles vuelva a la configuracion de pc
    if(screen.width>=700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

abrir.addEventListener('click',function(){
    apertura();
});