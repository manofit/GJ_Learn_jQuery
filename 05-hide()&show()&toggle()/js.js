/**
 * Created by clf on 16/11/5.
 */
$(document).ready(function () {
    $("#btn3").click(function () {
        $("#p3").toggle();
    });
    $("#btn1").click(function () {
        $("#p1").hide(1000);
    });
    $("#btn2").click(function () {
        $("#p1").show(1000,function () {
            $("#p2").hide(1000);
        });
    });
});