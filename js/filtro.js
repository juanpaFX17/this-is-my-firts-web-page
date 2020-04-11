$(function(){
    $('.filter').click(function(){
        $(this).addClass('active').siblings().removeClass('active');  //para que cambie de color el boton al seleccionarlo
        let valor = $(this).attr('data-nombre');
        if(valor == 'todos'){
            $('.cont-work').show('1000');   //mostramos todos
        }else{ 
            $('.cont-work').not('.'+ valor).hide('1000'); //no esconde la que tiene valor osea las que seleccionamos
            $('.cont-work').filter('.'+ valor).show('1000');  //ademas le decimos que muestre los de valor
        }
    });
    let equipo = $('#equipo').offset().top,
        servicios = $('#servicios').offset().top,
        trabajo = $('#trabajo').offset().top,
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
        let equipo = $('#equipo').offset().top,
        servicios = $('#servicios').offset().top,
        trabajo = $('#trabajo').offset().top,
        contacto = $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#enlace-falcon9').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: equipo - 100
        },600);
    });

    $('#enlace-falconheavy').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicios - 200
        },600);
    });

    $('#enlace-dragon').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: trabajo - 100
        },600);
    });

    $('#enlace-starship').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto - 100
        },600);
    });

});