
// Aqui se tiene que ir a la págimna de Jquery, después tienes que ir a "Jquery Download"

// Después se tiene que descargar la libreria "compressed, production Jquery"

$(document).ready(function(){

    var imgItems = $('.slider1 li').length;
    // el lenght va a contar cuantas dispositivas hay. 
    // imgItems = representa el número de slides que tengo en el html en la clase .pages

    var imgPos = 1; 

    for (i = 1; i <= imgItems; i++){
        $('.pages').append('<li><span class="fas fa-circle-notch"></span></li>');

    }
    // el append sirve para "agregar elemento html"

    // console.log(imgItems);

    $('.slider1 li').hide();
    // Aqui ocultamos los slides

    $('.slider1 li:first').show();
    // Aqui mostramos el primer slide

    $('.pages li:first').css({'color': '#e8a10a'});
    // Aqui damos estilos al primer slide item de la parte de "pages"

    // Aca va la función para que funcionen los botones y ejecute para cambiar de pagina:

    $('.pages li').click(pages);
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);

    setInterval(function(){
        
        nextSlider();
        
    },4000);

    //  FUNCIONES=======================================

    function pages(){

        var pagesPos = $(this).index() + 1;  
        // posicion de la página seleccionada
        // console.log(pagesPos);

        $('.slider1 li').hide();
        $('.slider1 li:nth-child('+ pagesPos +' )').fadeIn();
        // aqui se ocupo para poder mostrar el slide seleccionado metiendo el efecto de fadeIn


        $('pages li').css({'color': '#e8a10a'})
        $(this).css({'color': '#2A9D8F'});

        imgPos = pagesPos;
    }

    function nextSlider(){

        if (imgPos >= imgItems){imgPos = 1;} 
        
        else {imgPos++;}

        $('.slider1 li').hide();
        $('.slider1 li:nth-child('+ imgPos +')').fadeIn();

        $('.pages li').css({'color': '#e8a10a'});
        $('.pages li: nth-child('+ imgPos +')').css({'color': '#2A9D8F'});

    }

    function prevSlider(){

        if (imgPos <= 1){imgPos = imgItems;} 
        // posición de "paginas seleccionada"
        
        else {imgPos--;}

        $('.slider1 li').hide();
        $('.slider1 li:nth-child('+ imgPos +')').fadeIn();
        // mostramos los slides que queremos mostrar

        $('.pages li').css({'color': '#e8a10a'});
        $('.pages li: nth-child('+ imgPos +')').css({'color': '#2A9D8F'});

        // Dandole estilos a las páginas seleccionadas

    }
    

   

    $nav_movil= $('.nav-movil');
    $toggleCollapse= $('.toggle-collapse');    

    // Importante verificar que el .toogle-collapse este igual a como se escribio en el CSS.

    // click event on toggle menu

    $toggleCollapse.click(function(){
        $nav_movil.css('display', 'block');
    })


});





// window.addEventListener("click", function() {
//     console.log("Le diste click a todo el sitio");
    
// })
