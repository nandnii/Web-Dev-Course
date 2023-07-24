
$("#Hide").click(function(){
    $("h1").hide();
})

$("#Show").click(function(){
    $("h1").show();
})

$("#Toggle").click(function(){
    $("h1").toggle();
})

$("#FadeOut").click(function(){
    $("h1").fadeOut();
})

$("#FadeIn").click(function(){
    $("h1").fadeIn();
})

$("#FadeToggle").click(function(){
    $("h1").fadeToggle();
})

$("#SlideUp").click(function(){
    $("h1").slideUp();
})

$("#SlideDown").click(function(){
    $("h1").slideDown();
})

// For animate, we can only add those css values which are numeric in value
// like we can't add colour
$("#Custom").click(function(){
    $("h1").animate({opacity: 0.5})
})

$("#Chained").click(function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5})
})
