(function($) {
    var tab_top = $('.js-tap').offset().top;
    $(window).scroll(function() {
        var top = $('body').scrollTop();

        if (top >= tab_top) {
            $('.js-tap').addClass('fixed');
        } else {
            $('.js-tap').removeClass('fixed');
        }
    });

    var dis = 626;
    var isAnimate = false;
    $('.icon-left').on('click',function(e) {
        e.preventDefault();

        var $imgWrapper = $(this).next();
        var $img = $imgWrapper.find('img');
        var $active = $imgWrapper.find('img.active');
        var $prev = $active.prev();
        var len = $img.length;
        var index = $img.index($active);
        var left = parseInt($imgWrapper.find('.g-clear').css('margin-left'));
        var ml = left + dis + 'px';
        if (!isAnimate && (index > 0)) {
            isAnimate = true;
            $imgWrapper.find('.g-clear').animate({'margin-left': ml}, function() {
                $active.removeClass('active');
                $prev.addClass('active');
                isAnimate = false;
            });
        }
    });
    $('.icon-right').on('click',function(e) {
        e.preventDefault();
        var $imgWrapper = $(this).prev();
        var $img = $imgWrapper.find('img');
        var $active = $imgWrapper.find('img.active');
        var $next = $active.next();
        var len = $img.length;
        var index = $img.index($active);
        var left = parseInt($imgWrapper.find('.g-clear').css('margin-left'));
        var ml = left - dis + 'px';
        if (!isAnimate && (index < (len-1))) {
            isAnimate = true;
            $imgWrapper.find('.g-clear').animate({'margin-left': ml}, function() {
                $active.removeClass('active');
                $next.addClass('active');
                isAnimate = false;
            });
        }
    });

})(jQuery);
