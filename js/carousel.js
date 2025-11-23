$('.carousel').slick({
    centerMode: true,
    prevArrow: "<img class='carousel__arrow1' style='background-color: white; border-radius: 50%; width: 50px' src='images/site/arrow.png'>",
    nextArrow: "<img class='carousel__arrow2' style='background-color: white; border-radius: 50%; width: 50px; transform: rotate(180deg)' src='images/site/arrow.png'>",
    centerPadding: '0px'
});

if(window.innerWidth <= 425){
    $('.carousel').hide();
}
