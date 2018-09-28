$('.container--grid ul').mixItUp({
    animation: {
    duration: 350,
    effects: 'fade translateY(40px) stagger(20ms)',
    easing: 'ease'
    }
});

jQuery(document).ready(function($){
    var filter_tab = $('.filter .placeholder a');
    $('.filter ').on('click', function(event){
        var selected_filter = $(event.target).data('type');
        if( filter_tab.data('type') == selected_filter ) {
        } else {
            $('.filter .selected').removeClass('selected');
            $(event.target).addClass('selected');
        }
    });
    $(window).on('scroll', function(){
        (!window.requestAnimationFrame) ? stickFilters() : window.requestAnimationFrame(stickFilters);
    });

    function stickFilters() {
        var offsetTop = $('.container--grid').offset().top,
            scrollTop = $(window).scrollTop();
        ( scrollTop >= offsetTop - 66) ? $('.grid-filter-wrapper').addClass('is-sticky') : $('.grid-filter-wrapper').removeClass('is-sticky');
    }
});
