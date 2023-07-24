// ADD CLICK LISTENER ON H1
$("h1").click(function(){
    $("h1").css("color", "green")
})

// WITHOUT JQUERY, WE'D HAVE TO WRITE THIS WHOLE CODE TO CHANGE COLOUR ON CLICK OF BUTTON
// for(var i=0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "yellow";
//     });
// }

// WITH JQUERY, IT CAN BE DONE EASILY
$("button").click(function(){
    $("h1").css("color", "yellow")
})

// // WILL CONSOLE LOG KEYS PRESSED IN INPUT BOX
$("input").keydown(function(event){
    console.log(event.key);
});

// // TO CHANGE THE H1 HEADING TO THE KEY WE PRESSED
$("input").keydown(function(event){
    $("h1").text(event.key);
});

// CHANGE COLOUR BY HOVERING ON ELEMENTS
$("h1").on("mouseover", function(){
    $("h1").css("color", "purple")
})