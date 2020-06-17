///*jslint browser: true*/
/*jslint devel: true */
/*global $ */
$(function (e) {
    "use strict";
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    $width = $navbar.width();
    toggle_onclick($win, $navbar, width);
});

function toggle_onclick($win, $navbar, width) {
    "use strict";
    if ($win.width() <= 768) {
        $navbar.css({left: "-200px"});
    }
}
