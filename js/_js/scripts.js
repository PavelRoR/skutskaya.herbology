//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend jquery.fancybox.min.js

var isIE = false || !!document.documentMode;

if (isIE) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "css/ie.min.css";
    head.appendChild(link);
}

$(document).ready(function () {
    $(function () {
        var check = $('.check', this),
            email = $('.input-mail', this),
            message = $('.alert-message', this),
            button = $('.button-form', this),
            switch_title = $('.switch-title'),
            switch_text = $('.switch-text'),
            modal_text = $('.modal-text'),
            last_container_title = $('.last-container-title'),
            currDate = new Date(),
            startDate = new Array(
                new Date("September 19 2019 18:30 UTC+3"),
                new Date("September 20 2019 18:30 UTC+3")),
            endDate = new Array(
                new Date("September 19 2019 21:00 UTC+3"),
                new Date("September 20 2019 21:00 UTC+3")),
            rooms = new Array(
                'https://start.bizon365.ru/room/18087/herbal_science',
                'https://start.bizon365.ru/room/18087/herbal_science_d2');

        function roomSwitch() {
            modal_text.hide();
            last_container_title.hide();
            switch_title.removeClass('hide').html('А Вы записались на БЕСПЛАТНЫЙ ВЕБИНАР?<br>ЖДЕМ ТОЛЬКО ВАС!');
            switch_text.removeClass('hide').html('<span class="hurryup">Скорее ЗАХОДИТЕ прямо СЕЙЧАС на вебинар!</span><br>Присоединяйтесь к интенсиву и окунитесь в мир практической философии! Познайте этот мир и себя в нём!');
            button.text('Зайти!');
        }
        if ((currDate > startDate[0] && currDate < endDate[0]) || (currDate > startDate[1] && currDate < endDate[1])) {
            roomSwitch();
        }
        $(".form").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert-message', this),
                reNone = /.+/,
                email = $('.input-mail', this),
                button = $('.button-form', this);
            if (!email.val().match(reNone)) {
                message.text('Введите email').slideDown(500);
                return false;
            }
            if (!check.prop("checked")) {
                check.next().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                check.next().children().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                message.text('Подтвердите соглашение').slideDown(500);
                return false;
            }
            if (email.val() && check) {
                if (currDate > startDate[0] && currDate < endDate[0]) {
                    window.open(rooms[0]);
                }
                if (currDate > startDate[1] && currDate < endDate[1]) {
                    window.open(rooms[1]);
                }
                button.text('Отправляем...');
                setTimeout(function () {
                    button.text('Отправлено!');
                }, 500);
                return true
            }
        });
        email.click(function () {
            // email.css({"borderColor": "rgb(25, 10, 12)",'transition':'all .4s ease'});
            message.slideUp(500);
        });
        check.click(function () {
            check.next().css({
                "color": "#000",
                'transition': 'all .4s ease'
            });
            check.next().children().css({
                "color": "#000",
                'transition': 'all .4s ease'
            });
            message.slideUp(500);
        });
    });
    $(function () {
        $("[data-fancybox]").fancybox({
            buttons: [
                'slideShow',
                'share',
                'zoom',
                'fullScreen',
                // 'download',
                'close'
            ],
            speed: 330,
            loop: true,
            opacity: "auto",
            // autoScale: true,
            mouseWheel: true,
            transitionEffect: 'slide'
        });
    });
    $(function () {
        $(".video-wrapper-revs .video-rev-img").click(function () {
            var a = $(this).parent().attr("data-youtube");
            $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?enablejsapi=1&mute=1&showinfo=0&rel=0&autoplay=1"  allowfullscreen></iframe>');
            console.log(a);
        });
    });

    $(function () {
        $('#video-revs').on('slide.bs.carousel', function () {
            $('.video-wrapper-revs iframe').each(function () {
                // var v =$('.video_rev_img');
                var l = $(this).parent().attr('data-img');
                $(this).parent().html('<img class="video_rev_img" src="' + l + '" alt="Видео отзыв">');
                console.log(l);
            });
            $(".video-wrapper-revs .video-rev-img").click(function () {
                var a = $(this).parent().attr("data-youtube");
                $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?enablejsapi=1&mute=1&showinfo=0&rel=0&autoplay=1"  allowfullscreen></iframe>');
                console.log(a);
            });
        });
    });

    /*Конец документа*/
});