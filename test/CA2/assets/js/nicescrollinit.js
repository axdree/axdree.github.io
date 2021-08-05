// To initialize nicescroll library to customise scroll behaviour and scrollbar
// Note: Due to the way how chrome's touch emulation works, if you load the window as a normal window and use chrome developer tools to emulate a smaller device, touch drag and scroll might not work.
// This can easily be solved by reloading the page while in device emulation mode.
// This problem lies with chrome and will not happen in a production secenario on real mobile devices.
$(document).ready(function() {
    $("body").niceScroll({
        cursorcolor:"#9095ff",
        cursorwidth:"11px",
        cursorborder:"none",
        cursordragontouch : true,
        hwacceleration: true,
        smoothscroll: true,
        hidecursordelay:400,
        zindex: 9999999
    });
});

