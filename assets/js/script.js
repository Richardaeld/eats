// -----------z-index for hero pictures 1
var time = 0;
$(".polaroid-trans-1").on("mouseenter", function(){
     time = setTimeout(function() {
         var z_index;
         if ($(".polaroid-trans-1").css("z-index") < $(".polaroid-trans-2").css("z-index")) { // checks z lvl
          z_index = parseInt($(".polaroid-trans-2").css("z-index")) + 1; 
          $(".polaroid-trans-1").css("z-index", z_index); 
         }
        }, 200);    
}).on("mouseleave", function() {
    clearTimeout(time);
});

// -----------z-index for hero pictures 2
$(".polaroid-trans-2").on("mouseenter", function(){
     time = setTimeout(function() {
        $(".polaroid-trans-1").css("z-index", "0")
        $(".polaroid-trans-2").css("z-index", "1")
        $(".polaroid-trans-3").css("z-index", "0")
        $(".polaroid-trans-4").css("z-index", "0")

        }, 200);     
}).on("mouseleave", function() {
    clearTimeout(time);
});

// -----------z-index for hero pictures 2
$(".polaroid-trans-3").on("mouseenter", function(){
     time = setTimeout(function() {
        $(".polaroid-trans-1").css("z-index", "0")
        $(".polaroid-trans-2").css("z-index", "0")
        $(".polaroid-trans-3").css("z-index", "1")
        $(".polaroid-trans-4").css("z-index", "0")

        }, 200);     
}).on("mouseleave", function() {
    clearTimeout(time);
});

// -----------z-index for hero pictures 3
$(".polaroid-trans-4").on("mouseenter", function(){
     time = setTimeout(function() {
         var z_index;
         if ($(".polaroid-trans-4").css("z-index") < $(".polaroid-trans-3").css("z-index")) { // checks z lvl
          z_index = parseInt($(".polaroid-trans-3").css("z-index")) + 1; 
          $(".polaroid-trans-4").css("z-index", z_index); 
         }
        }, 200);      
}).on("mouseleave", function() {
    clearTimeout(time);
});

//--------------- float picture 1
$(".polaroid-trans-1").mouseenter(function() {
    $(".polaroid-trans-1").css("transform", "scale(1.0)");
    $(".polaroid-trans-1").css("box-shadow", "1rem 1rem 1rem 1rem rgba(84, 84, 84, .5)");
    $(".polaroid-trans-2").css("transform", "translate(50px, -50px) rotate(-4deg) scale(.9)");
    $(".polaroid-trans-3").css("transform", "translate(-50px, 50px) rotate(7deg) scale(.9)");
    $(".polaroid-trans-4").css("transform", "translate(50px, 50px) rotate(-10deg) scale(.9)");
});

$(".polaroid-trans-1").mouseleave(function() {
    $(".polaroid-trans-1").css("transform", "scale(.9) rotate(16deg)");
    $(".polaroid-trans-1").css("box-shadow", ".25rem .25rem .25rem .25rem rgba(84, 84, 84, .5)");
    $(".polaroid-trans-2").css("transform", "translate(0px) rotate(-8deg) scale(.9)");
    $(".polaroid-trans-3").css("transform", "translate(0px, 0px) rotate(10deg) scale(.9)");
    $(".polaroid-trans-4").css("transform", "translate(0px) rotate(-10deg) scale(.9)");
});

//--------------- float picture 2
$(".polaroid-trans-2").mouseenter(function() {
    $(".polaroid-trans-2").css("transform", "scale(1.0)");
    $(".polaroid-trans-2").css("box-shadow", "1rem 1rem 1rem 1rem rgba(84, 84, 84, .5)");
    $(".polaroid-trans-1").css("transform", "translate(-50px, -50px) rotate(16deg) scale(.9)");
    $(".polaroid-trans-3").css("transform", "translate(0px, 50px) rotate(3deg) scale(.9)");
    $(".polaroid-trans-4").css("transform", "translate(50px, 50px) rotate(-10deg) scale(.9)");

});

$(".polaroid-trans-2").mouseleave(function() {
    $(".polaroid-trans-2").css("transform", "scale(.9) rotate(-4deg)");
    $(".polaroid-trans-2").css("box-shadow", ".25rem .25rem .25rem .25rem rgba(84, 84, 84, .5)");
    $(".polaroid-trans-1").css("transform", "translate(0px) rotate(16deg) scale(.9)");
    $(".polaroid-trans-3").css("transform", "translate(0px) rotate(7deg) scale(.9)");
    $(".polaroid-trans-4").css("transform", "translate(0px) rotate(-10deg) scale(.9)");

});

//--------------- float picture 3
$(".polaroid-trans-3").mouseenter(function() {
    $(".polaroid-trans-3").css("transform", "scale(1.0)");
    $(".polaroid-trans-3").css("box-shadow", "1rem 1rem 1rem 1rem rgba(84, 84, 84, .5)");
    $(".polaroid-trans-1").css("transform", "translate(-50px, -50px) rotate(16deg) scale(.9)");
    $(".polaroid-trans-2").css("transform", "translate(0px, -50px) rotate(-3deg) scale(.9)");
    $(".polaroid-trans-4").css("transform", "translate(50px, 50px) rotate(-10deg) scale(.9)");

});

$(".polaroid-trans-3").mouseleave(function() {
    $(".polaroid-trans-3").css("transform", "scale(.9) rotate(7deg)");
    $(".polaroid-trans-3").css("box-shadow", ".25rem .25rem .25rem .25rem rgba(84, 84, 84, .5)");
    $(".polaroid-trans-1").css("transform", "translate(0px) rotate(16deg) scale(.9)");
    $(".polaroid-trans-2").css("transform", "translate(0px) rotate(-4deg) scale(.9)");
    $(".polaroid-trans-4").css("transform", "translate(0px) rotate(-10deg) scale(.9)");
});

//--------------- float picture 4
$(".polaroid-trans-4").mouseenter(function() {
    $(".polaroid-trans-4").css("transform", "scale(1.0)");
    $(".polaroid-trans-4").css("box-shadow", "1rem 1rem 1rem 1rem rgba(84, 84, 84, .5)");
    $(".polaroid-trans-1").css("transform", "translate(-50px,-50px) rotate(16deg) scale(.9)");
    $(".polaroid-trans-2").css("transform", "translate(-50px, -50px) rotate(-4deg) scale(.9)");
    $(".polaroid-trans-3").css("transform", "translate(-50px, -50px) rotate(7deg) scale(.9)");
});

$(".polaroid-trans-4").mouseleave(function() {
    $(".polaroid-trans-4").css("transform", "scale(.9) rotate(-10deg)");
    $(".polaroid-trans-4").css("box-shadow", ".25rem .25rem .25rem .25rem rgba(84, 84, 84, .5)");
    $(".polaroid-trans-1").css("transform", "translate(0px) rotate(16deg) scale(.9)");
    $(".polaroid-trans-2").css("transform", "translate(0px) rotate(-4deg) scale(.9)");
    $(".polaroid-trans-3").css("transform", "translate(0px) rotate(7deg) scale(.9)");
});

//--------------social link function scale

$(".social-1, .social-2, .social-3").mouseenter(function() {
    $(this).css("transform", "scale(1.2");
});

$(".social-1, .social-2, .social-3").mouseleave(function() {
    $(this).css("transform", "scale(1)");
});

//-------------- location toggle hide and menu list color
$(document).ready(function() {
    $("#location").hide();
    $(".veggie-line  div:even").css("color", "#86f00f");
    $(".veggie-line  div:odd").css("color", "#0ff0ea");
    $(".meat-line  p:even").css("color", "#86f00f");
    $(".meat-line  p:odd").css("color", "#0ff0ea");

    $(".extras-line  span:even").css("color", "#86f00f");
    $(".extras-line  span:odd").css("color", "#0ff0ea");
    $(".extras-line  p:even").css("color", "#86f00f");
    $(".extras-line  p:odd").css("color", "#0ff0ea");

    $(".drinks-line  span:even").css("color", "#86f00f");
    $(".drinks-line  span:odd").css("color", "#0ff0ea");
    $(".drinks-line  p:even").css("color", "#86f00f");
    $(".drinks-line  p:odd").css("color", "#0ff0ea");

    $(".beer-line  span:even").css("color", "#86f00f");
    $(".beer-line  span:odd").css("color", "#0ff0ea");
    $(".beer-line  p:even").css("color", "#86f00f");
    $(".beer-line  p:odd").css("color", "#0ff0ea");
});

$("#maps-tog").click(function() {
    $("#location").toggle();
});

$(".js-location").click(function() {
    $("#location").toggle();
});

//--------------photo.gallery 
$("#picture-1").click(function(){
    $("#picture-frame").css("background-image", "url('assets/images/friends/friends-1.jpg')");
});

$("#picture-2").click(function(){
    $("#picture-frame").css("background-image", "url('assets/images/family/family-8.jpg')");
});

$("#picture-3").click(function(){
    $("#picture-frame").css("background-image", "url('assets/images/friends/friends-3.jpg')");

});

$("#picture-4").click(function(){
    $("#picture-frame").css("background-image", "url('assets/images/family/family-3.jpg')");
});

$("#picture-5").click(function(){
    $("#picture-frame").css("background-image", "url('assets/images/family/family-10.jpg')");
});

$("#picture-6").click(function(){
    $("#picture-frame").css("background-image", "url('assets/images/family/family-1.jpg')");
});

$("#picture-7").click(function(){
    $("#picture-frame").css("background-image", "url('assets/images/food/food-10.jpg')");
});

$("#picture-8").click(function(){
    $("#picture-frame").css("background-image", "url('assets/images/awards/awards-3.jpg')");
});

$("#picture-9").click(function(){
    $("#picture-frame").css("background-image", "url('assets/images/food/food-1.jpg')");
});

$("#picture-10").click(function(){
    $("#picture-frame").css("background-image", "url('assets/images/food/food-2.jpg')");
});

$("#picture-11").click(function(){
    $("#picture-frame").css("background-image", "url('assets/images/food/food-3.jpg')");
});

$("#picture-12").click(function(){
    $("#picture-frame").css("background-image", "url('assets/images/food/food-5.jpg')");
});

$("#picture-13").click(function(){
    $("#picture-frame").css("background-image", "url('assets/images/food/food-8.jpg')");
});

$("#picture-14").click(function(){
    $("#picture-frame").css("background-image", "url('assets/images/friends/friends-2.jpg')");
});