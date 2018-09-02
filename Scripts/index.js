//This file will contain the logic for changing the style of the web page
$(document).ready(function () {
    $("#btnChangeFF").click(function () {
        var current = $(this).attr("value");
        if(current == "0"){
            $("h1, h2, h3, h4, h5, h6, p, a, .btn-action").css("font-family", "cursive");
            $(this).attr("value", "1");
        }else{
            $("h1, h2, h3, h4, h5, h6, p, a, .btn-action").css("font-family", "");
            $(this).attr("value", "0");
        }
    });

    $("#btnChangeFS").click(function () {
        var current = $(this).attr("value");
        if(current == "0"){
            $("h1, h2, h3, h4, h5, h6, p, a, .btn-action").each(function(index){
                var sizeFuenteActual = $(this).css('font-size');
 	            var sizeFuenteActualNum = parseFloat(sizeFuenteActual, 10);
                var sizeFuenteNuevo = sizeFuenteActualNum*1.5;
	            $(this).css('font-size', sizeFuenteNuevo);
            });
            $(this).attr("value", "1");
        }else{
            $("h1, h2, h3, h4, h5, h6, p, a, .btn-action").css('font-size', "");
            $(this).attr("value", "0");
        }
    });

    $("#btnChangeImg").click(function () {
        var current = $(this).attr("value");
        if(current == "0"){
            $(".form .hero-section").removeClass("val0");
            $(".form .hero-section").addClass("val1");
            $(this).attr("value", "1");
        }else{
            $(".form .hero-section").removeClass("val1");
            $(".form .hero-section").addClass("val0");
            $(this).attr("value", "0");
        }
    });

    $("#btnChangeBC").click(function () {
        var current = $(this).attr("value");
        if(current == "0"){
            $(".pitch").css("background","#2c2816");
            $(".footer").css("background","#17150c");
            $(this).attr("value", "1");
        }else{
            $(".pitch").css("background","");
            $(".footer").css("background","");
            $(this).attr("value", "0");
        }
    });

    $("#btnChangeNV").click(function () {
        var current = $(this).attr("value");
        if(current == "0"){
            $("#bs-example-navbar-collapse-1").removeClass("navbar-right");
            $("#bs-example-navbar-collapse-1").addClass("navbar-left");
            $(this).attr("value", "1");
        }else{
            $("#bs-example-navbar-collapse-1").removeClass("navbar-left");
            $("#bs-example-navbar-collapse-1").addClass("navbar-right");
            $(this).attr("value", "0");
        }
    });
});