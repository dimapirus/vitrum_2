// Select
$('.slct').click(function(){
    /* Заносим выпадающий список в переменную */
    var dropBlock = $(this).parent().find('.drop');
    /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
    if( dropBlock.is(':hidden') ) {
        dropBlock.slideDown();
        /* Выделяем ссылку открывающую select */
        $(this).addClass('active');
        /* Работаем с событием клика по элементам выпадающего списка */
        $('.drop').find('li').click(function(){
            /* Заносим в переменную HTML код элемента
            списка по которому кликнули */
            var selectResult = $(this).html();
            /* Находим наш скрытый инпут и передаем в него
            значение из переменной selectResult */
            $(this).parent().parent().find('input').val(selectResult);
            /* Передаем значение переменной selectResult в ссылку которая
            открывает наш выпадающий список и удаляем активность */
            $(this).parent().parent().find('.slct').removeClass('active').html(selectResult);
            /* Скрываем выпадающий блок */
            dropBlock.slideUp();
        });
        /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
    } else {
        $(this).removeClass('active');
        dropBlock.slideUp();
    }
    /* Предотвращаем обычное поведение ссылки при клике */
    return false;
});

function myFunction() {
    var element = document.getElementById("drop_down");
    element.classList.toggle("mystyle");
}
function myFunction_two() {
    var element = document.getElementById("drop_down_two");
    element.classList.toggle("mystyle");
}
function myFunction_three() {
    var element = document.getElementById("drop_down_three");
    element.classList.toggle("mystyle");
}
function myFunction_four() {
    var element = document.getElementById("drop_down_four");
    element.classList.toggle("mystyle");
}
function myFunction_five() {
    var element = document.getElementById("drop_down_five");
    element.classList.toggle("mystyle");
}
function myFunction_six() {
    var element = document.getElementById("drop_down_six");
    element.classList.toggle("mystyle");
}
function myFunction_seven() {
    var element = document.getElementById("drop_down_seven");
    element.classList.toggle("mystyle");
}
function myFunction_eight() {
    var element = document.getElementById("drop_down_eight");
    element.classList.toggle("mystyle");
}
function myFunction_nine() {
    var element = document.getElementById("drop_down_nine");
    element.classList.toggle("mystyle");
}
function myFunction_menu() {
    var element = document.getElementById("drop_down_menu");
    element.classList.toggle("mystyle_menu");
}
function myFunction_menu_mob() {
    var element = document.getElementById("drop_down_menu_mob");
    element.classList.toggle("mystyle_menu");
}
function myFunction_slct() {
    var element = document.getElementById("drop_down_slct");
    element.classList.toggle("mystyle_menu");
}
function myFunction_sort() {
    var element = document.getElementById("drop_down_sort");
    element.classList.toggle("mystyle_menu");
}

$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 10000000,
        values: [ 6000, 8204999 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( + ui.values[ 0 ]);
            $( "#amount2" ).val( + ui.values[ 1 ] );
        },
        start: function( event, ui ) {
            $( "#slider-range > div" ).addClass("g_color");
        },
        stop: function( event, ui ) {
            $( "#slider-range > div" ).removeClass("g_color");
        }
    });
    $( "#amount" ).val( + $( "#slider-range" ).slider( "values", 0 ) );
    $( "#amount2" ).val( + $( "#slider-range" ).slider( "values", 1 ) );
} );

$( function() {
    $( "#slider-range_two" ).slider({
        range: true,
        min: 0,
        max: 48,
        values: [ 12, 48 ],
        slide: function( event, ui ) {
            $( "#amount3" ).val( + ui.values[ 0 ]);
            $( "#amount4" ).val( + ui.values[ 1 ] );
        },
        start: function( event, ui ) {
            $( "#slider-range_two > div" ).addClass("g_color");
        },
        stop: function( event, ui ) {
            $( "#slider-range_two > div" ).removeClass("g_color");
        }
    });
    $( "#amount3" ).val( + $( "#slider-range_two" ).slider( "values", 0 ) );
    $( "#amount4" ).val( + $( "#slider-range_two" ).slider( "values", 1 ) );
} );

$( function() {
    $( "#slider-range_three" ).slider({
        range: true,
        min: 0,
        max: 1200,
        values: [ 800, 1200 ],
        slide: function( event, ui ) {
            $( "#amount5" ).val( + ui.values[ 0 ]);
            $( "#amount6" ).val( + ui.values[ 1 ] );
        },
        start: function( event, ui ) {
            $( "#slider-range_three > div" ).addClass("g_color");
        },
        stop: function( event, ui ) {
            $( "#slider-range_three > div" ).removeClass("g_color");
        }
    });
    $( "#amount5" ).val( + $( "#slider-range_three" ).slider( "values", 0 ) );
    $( "#amount6" ).val( + $( "#slider-range_three" ).slider( "values", 1 ) );
} );

$( function() {
    $( "#slider-range_four" ).slider({
        range: true,
        min: 0,
        max: 1200,
        values: [ 800, 1200 ],
        slide: function( event, ui ) {
            $( "#amount7" ).val( + ui.values[ 0 ]);
            $( "#amount8" ).val( + ui.values[ 1 ] );
        },
        start: function( event, ui ) {
            $( "#slider-range_four > div" ).addClass("g_color");
        },
        stop: function( event, ui ) {
            $( "#slider-range_four > div" ).removeClass("g_color");
        }
    });
    $( "#amount7" ).val( + $( "#slider-range_four" ).slider( "values", 0 ) );
    $( "#amount8" ).val( + $( "#slider-range_four" ).slider( "values", 1 ) );
} );

$( function() {
    $( "#slider-range_five" ).slider({
        range: true,
        min: 0,
        max: 1200,
        values: [ 800, 1200 ],
        slide: function( event, ui ) {
            $( "#amount9" ).val( + ui.values[ 0 ]);
            $( "#amount10" ).val( + ui.values[ 1 ] );
        },
        start: function( event, ui ) {
            $( "#slider-range_five > div" ).addClass("g_color");
        },
        stop: function( event, ui ) {
            $( "#slider-range_five > div" ).removeClass("g_color");
        }
    });
    $( "#amount9" ).val( + $( "#slider-range_five" ).slider( "values", 0 ) );
    $( "#amount10" ).val( + $( "#slider-range_five" ).slider( "values", 1 ) );
} );

let menuElem = document.getElementById('sweeties');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
    menuElem.classList.toggle('open');
};


let menuElemMob = document.getElementById('sweeties_mob');
let titleElemMob = menuElemMob.querySelector('.title_mob');

titleElemMob.onclick = function() {
    menuElemMob.classList.toggle('open');
};
let menuElemFilter = document.getElementById('sweeties_filter');
let titleElemFilter = menuElemFilter.querySelector('.title_filter');

titleElemFilter.onclick = function() {
    menuElemFilter.classList.toggle('open');
};


$( '.ctg_r_three > a' ).on( 'click', function ( e ) {
    e.preventDefault();
    $( '.ctg_r_three > a' ).removeClass( 'ctg_r_three_active' );
    $( this ).addClass( 'ctg_r_three_active' );
    $('.goods_main').hide();
    $( $(this).data('open') ).show();
} );
