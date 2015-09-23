$(document).ready(function(){
    var activeSlide = 0;
    var slide = $('.slider-inner .item').eq(activeSlide);
    var slidePosition = 0;
    var sliderPosition = 0;

    $('.slider-inner').scrollLeft(slidePosition.left);
    $('.slider-indicators li').eq(activeSlide).addClass("active");

    $('.slider-indicators li').mouseenter(function(){
    activeSlide = $(this).index();

    if ($(this).attr('class') !== "active"){
    $('.slider-indicators li').removeClass("active");
    $('.slider-indicators li').eq(activeSlide).addClass("active");
    slide = $('.slider-inner .item').eq(activeSlide);
    slidePosition = slide.position();
    sliderPosition = $('.slider-inner').scrollLeft() + slidePosition.left;
    $('.slider-inner').scrollLeft(sliderPosition);
    }
    });
    $('.slider-control').click(function(){
    $('.slider-indicators li').removeClass("active");
    if ($(this).hasClass("left") & (activeSlide !== 0)){
    activeSlide -= 1;
    } 
    if ($(this).hasClass("right") & (activeSlide !== 4)){
    activeSlide += 1;     
    }
    $('.slider-indicators li').eq(activeSlide).addClass("active");
    slide = $('.slider-inner .item').eq(activeSlide);
    slidePosition = slide.position();
    sliderPosition = $('.slider-inner').scrollLeft() + slidePosition.left;
    $('.slider-inner').scrollLeft(sliderPosition);
    return false;
    });            
});