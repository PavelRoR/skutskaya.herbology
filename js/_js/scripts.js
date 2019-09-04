//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
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
            title = $('.mail_section_title'),
            title_2 = $('.last_form_title'),
            currDate = new Date(),
            startDate_1 = new Date("July 15 2019 18:30 UTC+3"),
            endDate_1 = new Date("July 15 2019 21:00 UTC+3"),
            startDate_2 = new Date("July 16 2019 18:30 UTC+3"),
            endDate_2 = new Date("July 16 2019 21:00 UTC+3"),
            rooms = new Array('https://start.bizon365.ru/room/6538/metaphysics_3_steps_day1', 'https://start.bizon365.ru/room/6538/metaphysics_3_steps_day2')

        function roomSwitch() {
            title.html('А Вы записались на БЕСПЛАТНЫЙ ВЕБИНАР? ЖДЕМ ТОЛЬКО ВАС!<br><span class="hurryup">Скорее ЗАХОДИТЕ прямо СЕЙЧАС на вебинар!</span><small>Присоединяйтесь к интенсиву и примите участие в грандиозном розыгрыше с ценным призом! Каждому участнику – денежные подарки! Поймайте удачу за хвост!</small>');
            title_2.html('А Вы записались на БЕСПЛАТНЫЙ ВЕБИНАР? ЖДЕМ ТОЛЬКО ВАС!<br><span class="hurryup">Скорее ЗАХОДИТЕ прямо СЕЙЧАС на вебинар!</span><small>Присоединяйтесь к интенсиву и примите участие в грандиозном розыгрыше с ценным призом! Каждому участнику – денежные подарки! Поймайте удачу за хвост!</small>');
            button.text('Зайти!');
        }
        if (currDate > startDate_1 && currDate < endDate_1) {
            roomSwitch();
        }
        if (currDate > startDate_2 && currDate < endDate_2) {
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
                if (currDate > startDate_1 && currDate < endDate_1) {
                    window.open(rooms[0]);
                }
                if (currDate > startDate_2 && currDate < endDate_2) {
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


    /*Конец документа*/
});