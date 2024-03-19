$(document).ready(function(){

    $("#tab1").click(function(){
        $(".bodyhome").removeClass("content")
        $(".aboutus-page").addClass("content")
        $(".contact-page").addClass("content")
    })
    $("#tab2").click(function(){
        $(".aboutus-page").removeClass("content")
        $(".bodyhome").addClass("content")
        $(".contact-page").addClass("content")
    })
    $("#tab3").click(function(){
        $(".contact-page").removeClass("content")
        $(".aboutus-page").addClass("content")
        $(".bodyhome").addClass("content")
    })

  });