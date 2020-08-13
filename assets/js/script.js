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
        }, 200);     
}).on("mouseleave", function() {
    clearTimeout(time);
});

// -----------z-index for hero pictures 3
$(".polaroid-trans-3").on("mouseenter", function(){
     time = setTimeout(function() {
         var z_index;
         if ($(".polaroid-trans-3").css("z-index") < $(".polaroid-trans-2").css("z-index")) { // checks z lvl
          z_index = parseInt($(".polaroid-trans-2").css("z-index")) + 1; 
          $(".polaroid-trans-3").css("z-index", z_index); 
         }
        }, 200);      
}).on("mouseleave", function() {
    clearTimeout(time);
});

//--------------- float picture 1
$(".polaroid-trans-1").mouseenter(function() {
    $(".polaroid-trans-1").css("transform", "scale(1.1)");
    $(".polaroid-trans-1").css("box-shadow", "1rem 1rem 1rem 1rem rgba(84, 84, 84, .5)");
    $(".polaroid-trans-2").css("transform", "translate(100px) rotate(-8deg)");
});

$(".polaroid-trans-1").mouseleave(function() {
    $(".polaroid-trans-1").css("transform", "scale(1.0) rotate(16deg)");
    $(".polaroid-trans-1").css("box-shadow", ".25rem .25rem .25rem .25rem rgba(84, 84, 84, .5)");
    $(".polaroid-trans-2").css("transform", "translate(0px) rotate(-8deg)");
});

//--------------- float picture 2
$(".polaroid-trans-2").mouseenter(function() {
    $(".polaroid-trans-2").css("transform", "scale(1.1)");
    $(".polaroid-trans-2").css("box-shadow", "1rem 1rem 1rem 1rem rgba(84, 84, 84, .5)");
    $(".polaroid-trans-1").css("transform", "translate(-100px) rotate(16deg)");
    $(".polaroid-trans-3").css("transform", "translate(100px) rotate(10deg)");
});

$(".polaroid-trans-2").mouseleave(function() {
    $(".polaroid-trans-2").css("transform", "scale(1.0) rotate(-8deg)");
    $(".polaroid-trans-2").css("box-shadow", ".25rem .25rem .25rem .25rem rgba(84, 84, 84, .5)");
    $(".polaroid-trans-1").css("transform", "translate(0px) rotate(16deg)");
    $(".polaroid-trans-3").css("transform", "translate(0px) rotate(10deg)");
});

//--------------- float picture 3
$(".polaroid-trans-3").mouseenter(function() {
    $(".polaroid-trans-3").css("transform", "scale(1.1)");
    $(".polaroid-trans-3").css("box-shadow", "1rem 1rem 1rem 1rem rgba(84, 84, 84, .5)");
    $(".polaroid-trans-2").css("transform", "translate(-100px) rotate(-8deg)");
});

$(".polaroid-trans-3").mouseleave(function() {
    $(".polaroid-trans-3").css("transform", "scale(1.0) rotate(10deg)");
    $(".polaroid-trans-3").css("box-shadow", ".25rem .25rem .25rem .25rem rgba(84, 84, 84, .5)");
    $(".polaroid-trans-2").css("transform", "translate(0px) rotate(-8deg)");
});
