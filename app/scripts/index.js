(function($) {
    // 首屏全屏
    var win_height = $(window).height();
    $('.g-top-banner').height(win_height);

    // 滑完首屏导航置顶
    $(window).scroll(function() {
        var top = $('body').scrollTop();
        if (top >= win_height) {
            $('header').addClass('fixed');
            $('header').next().addClass('g-container');
        } else if (top < win_height) {
            $('header').removeClass('fixed');
            $('header').next().removeClass('g-container');
        }
    });

    // 评论轮播
    var $commentItem = $('.comment-block li a');
    var $comment = $('.comment-block ul');
    var dis = 329;
    var isAnimate = false;

    $commentItem.on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var index = $commentItem.index($this);
        var $cur = $('.comment-block li a.active');
        var cur_index = $commentItem.index($cur);
        var left = parseInt($comment.css('margin-left'));

        if (!isAnimate) {
            isAnimate = true;
            if (index > cur_index) {
                var margin_left = left - dis * (index - cur_index) + 'px';
            } else {
                var margin_left = left + dis * (cur_index - index) + 'px';
            }
            $comment.animate({'margin-left': margin_left}, function() {
                $cur.removeClass('active');
                $this.addClass('active');
                $('.js-comment-text').text($this.find('.js-comment').text());
                isAnimate = false;
            });
        }
    });

    $('.js-comment-prev').on('click', function(e) {
        e.preventDefault();

        var $cur = $('.comment-block li a.active');
        var index = $commentItem.index($cur);
        var $prev = $($commentItem[index-1]);

        if (!isAnimate && index > 0) {
            var left = parseInt($comment.css('margin-left'));
            isAnimate = true;
            $comment.animate({'margin-left': left + dis + 'px'}, function() {
                $cur.removeClass('active');
                $prev.addClass('active');
                $('.js-comment-text').text($prev.find('.js-comment').text());
                isAnimate = false;
            });
        }

    });
    $('.js-comment-next').on('click', function(e) {
        e.preventDefault();

        var $cur = $('.comment-block li a.active');
        var index = $commentItem.index($cur);
        var $next = $($commentItem[index+1]);

        if (!isAnimate && (index < $commentItem.length-1 )) {
            var left = parseInt($comment.css('margin-left'));
            isAnimate = true;
            $comment.animate({'margin-left': left - dis + 'px'}, function() {
                $cur.removeClass('active');
                $next.addClass('active');
                $('.js-comment-text').text($next.find('.js-comment').text());
                isAnimate = false;
            });
        }

    });
})(jQuery);
