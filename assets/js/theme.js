(function ($) {
    $(document).on('click', '[data-toggle]', function () {
        const dataToggle = $(this).attr('data-toggle')
        const targetElement = $(dataToggle)
        if (targetElement.length) {
            $('[data-toggle="' + dataToggle + '"]').toggleClass('active');
            targetElement.toggleClass('active');
            if (targetElement.hasClass('active')) {
                $('body').addClass('sidebar-active')
            } else {
                $('body').removeClass('sidebar-active')
            }
        }
    });
})(jQuery);