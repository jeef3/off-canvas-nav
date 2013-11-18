(function () {
    var $pusher = $('.pusher'),
        dragging = false;

    $('.pusher')
        .on('touchmove', function (e) {
            dragging = true;
        })
        .on('touchstart', function (e) {
            dragging = false;
        })
        .on('touchend', function (e) {
            if (dragging) {
                return;
            }

            $pusher.toggleClass('is-pushed');
            e.preventDefault();
        })
        .on('click', function (e) {
            $pusher.toggleClass('is-pushed');
        });
})();
