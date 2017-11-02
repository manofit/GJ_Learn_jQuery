/**
 * Created by clf on 16/11/5.
 */
$(document).ready(function () {
    $("input").focus(function () {
        $(this).css("background-color","#cccccc");
    });
    $("input").blur(function () {
        $(this).css("background-color","#ffffff");
    });
});