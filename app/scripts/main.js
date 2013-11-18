(function () {
    var $pusher = $('.pusher');

    $('.pusher')
        .on('touchend', function (e) {
            $pusher.toggleClass('is-pushed');
            e.preventDefault();
        })
        .on('click', function (e) {
            $pusher.toggleClass('is-pushed');
        })
})();
